/**
 * Ollama API Client Service
 */

const OLLAMA_HOST = process.env.OLLAMA_HOST || 'http://127.0.0.1:11434';

/**
 * Fetch available Ollama models
 */
export async function getOllamaModels() {
  try {
    const res = await fetch(`${OLLAMA_HOST}/api/tags`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.models || []).map(m => m.name);
  } catch {
    return [];
  }
}

/**
 * Stream a prompt to Ollama
 * @param {Object} options
 * @param {string} options.model
 * @param {string} options.prompt
 * @param {string} options.systemPrompt
 * @param {Function} options.onChunk
 * @param {AbortSignal} options.signal
 */
export async function streamOllama({ model, prompt, systemPrompt, onChunk, signal }) {
  const url = `${OLLAMA_HOST}/api/generate`;

  const body = {
    model,
    prompt,
    system: systemPrompt,
    stream: true
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Ollama error (${res.status}): ${errText}`);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let fullText = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    const lines = chunk.split('\n').filter(Boolean);

    for (const line of lines) {
      try {
        const parsed = JSON.parse(line);
        if (parsed.response) {
          fullText += parsed.response;
          if (onChunk) {
            onChunk(parsed.response, fullText);
          }
        }
      } catch {
        // Ignore JSON chunk parse errors from stream framing
      }
    }
  }

  return fullText;
}
