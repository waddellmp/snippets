import { execa } from 'execa';

/**
 * Normalizes SQL by stripping comments, consolidating whitespace,
 * lowercasing tokens, and removing trailing semicolons for robust comparison.
 */
export function normalizeSql(sql) {
  if (!sql) return '';

  // Extract query if wrapped inside psql -c "..."
  const psqlMatch = sql.match(/psql(?:\s+-[a-zA-Z0-9]+)*\s+-c\s+["']([^"']+)["']/i);
  let cleaned = psqlMatch ? psqlMatch[1] : sql;

  cleaned = cleaned
    .replace(/--.*$/gm, '')                // Remove single line comments
    .replace(/\/\*[\s\S]*?\*\//g, '')       // Remove multi-line comments
    .replace(/[;,\s]+/g, ' ')               // Consolidate spaces, commas & semicolons
    .trim()
    .toLowerCase();

  return cleaned;
}

/**
 * Validates a user command against a challenge (supports Bash, SQL, and Ruby types).
 */
export async function validateCommand(userCommand, challenge) {
  if (!userCommand || userCommand.trim().length === 0) {
    return {
      success: false,
      actualOutput: '',
      expectedOutput: challenge.expectedOutput || challenge.solution || challenge.referenceSolution,
      error: 'Please enter a command, query, or Ruby script.'
    };
  }

  const rawInput = userCommand.trim();

  // 1. Handle SQL Challenge validation
  if (challenge.type === 'sql') {
    const userNorm = normalizeSql(rawInput);
    const expectedNorm = normalizeSql(challenge.solution || challenge.referenceSolution);

    // Check direct normalized match
    let isMatch = userNorm === expectedNorm;

    // Check alternative solutions if provided
    if (!isMatch && Array.isArray(challenge.alternateSolutions)) {
      isMatch = challenge.alternateSolutions.some(alt => normalizeSql(alt) === userNorm);
    }

    // Check regex pattern if provided
    if (!isMatch && challenge.pattern) {
      const regex = new RegExp(challenge.pattern, 'i');
      isMatch = regex.test(rawInput);
    }

    return {
      success: isMatch,
      actualOutput: rawInput,
      expectedOutput: challenge.solution || challenge.referenceSolution,
      error: isMatch ? null : 'SQL query structure mismatch'
    };
  }

  // 2. Handle Ruby Challenge execution
  if (challenge.type === 'ruby') {
    try {
      let scriptToRun = rawInput;
      const hasExplicitPrint = /\b(puts|print|p)\s+/.test(rawInput);
      if (!hasExplicitPrint) {
        scriptToRun = `__result__ = begin\n${rawInput}\nend\nputs __result__.is_a?(String) ? __result__ : __result__.inspect`;
      }

      const { stdout, stderr, exitCode } = await execa('ruby', ['-e', scriptToRun], {
        timeout: 4000,
        reject: false
      });

      const actual = stdout.trim();
      const expected = (challenge.expectedOutput || '').trim();

      // Normalize hash rockets {:a => 1} vs modern {a: 1} for comparison
      const normalizeRubyHash = (s) => s.replace(/:([a-zA-Z0-9_]+)\s*=>/g, '$1:').replace(/\s+/g, ' ');

      let isMatch = actual === expected || normalizeRubyHash(actual) === normalizeRubyHash(expected);

      if (!isMatch && challenge.outputPattern) {
        const regex = new RegExp(challenge.outputPattern, 'i');
        isMatch = regex.test(actual);
      }

      // Check normalized inspect match (e.g. key/value whitespace differences in hashes)
      if (!isMatch && actual.replace(/\s+/g, '') === expected.replace(/\s+/g, '')) {
        isMatch = true;
      }

      return {
        success: isMatch,
        actualOutput: actual,
        expectedOutput: expected,
        stderr: stderr ? stderr.trim() : null,
        exitCode,
        error: isMatch ? null : (exitCode !== 0 && stderr ? stderr.trim() : 'Output mismatch')
      };
    } catch (err) {
      return {
        success: false,
        actualOutput: '',
        expectedOutput: challenge.expectedOutput || challenge.solution || challenge.referenceSolution,
        error: err.timedOut ? 'Ruby execution timed out after 4 seconds.' : err.message
      };
    }
  }

  // 3. Handle Bash command execution via subshell
  try {
    const { stdout, stderr, exitCode } = await execa('bash', ['-c', rawInput], {
      timeout: 4000,
      reject: false
    });

    const actual = stdout.trim();
    const expected = (challenge.expectedOutput || '').trim();

    // Check custom validator function if present
    let isMatch = false;
    if (typeof challenge.validate === 'function') {
      isMatch = challenge.validate(actual, rawInput);
    } else {
      isMatch = actual === expected;

      if (!isMatch && challenge.outputPattern) {
        const regex = new RegExp(challenge.outputPattern, 'i');
        isMatch = regex.test(actual);
      }
    }

    return {
      success: isMatch,
      actualOutput: actual || (exitCode === 0 ? '✔ (Exit Code 0: OK)' : `Exit Code ${exitCode}`),
      expectedOutput: expected || challenge.hint || challenge.referenceSolution || challenge.solution,
      stderr: stderr ? stderr.trim() : null,
      exitCode,
      error: isMatch ? null : (exitCode !== 0 && stderr ? stderr.trim() : 'Output or command mismatch')
    };
  } catch (err) {
    return {
      success: false,
      actualOutput: '',
      expectedOutput: challenge.expectedOutput || challenge.solution || challenge.referenceSolution,
      error: err.timedOut ? 'Command timed out after 4 seconds.' : err.message
    };
  }
}
