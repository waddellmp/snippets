import { Chalk } from 'chalk';

const chalk = new Chalk({ level: 3 });

const SQL_KEYWORDS = new Set([
  'select', 'from', 'where', 'insert', 'into', 'update', 'delete', 'create',
  'drop', 'alter', 'table', 'index', 'concurrently', 'if', 'not', 'exists',
  'begin', 'rollback', 'commit', 'grant', 'revoke', 'show', 'order', 'by',
  'group', 'having', 'limit', 'offset', 'join', 'left', 'right', 'inner',
  'outer', 'on', 'as', 'and', 'or', 'set', 'role', 'user', 'with', 'password',
  'login', 'database', 'schema', 'view', 'extension', 'column', 'primary',
  'key', 'foreign', 'references', 'default', 'null', 'is', 'in', 'like',
  'ilike', 'values', 'distinct', 'union', 'all', 'case', 'when', 'then',
  'else', 'end', 'between', 'cast', 'start', 'transaction'
]);

const BASH_KEYWORDS = new Set([
  'echo', 'printf', 'grep', 'sed', 'awk', 'cut', 'sort', 'uniq', 'cat',
  'command', 'psql', 'systemctl', 'sudo', 'if', 'then', 'elif', 'else',
  'fi', 'for', 'while', 'do', 'done', 'case', 'esac', 'in', 'set', 'export',
  'local', 'return', 'exit', 'true', 'false', 'test', 'mkdir', 'rm', 'rmdir',
  'touch', 'chmod', 'chown', 'find', 'xargs', 'head', 'tail', 'wc', 'tr'
]);

const RUBY_KEYWORDS = new Set([
  'def', 'class', 'module', 'end', 'if', 'elsif', 'else', 'unless', 'while',
  'until', 'for', 'in', 'do', 'yield', 'return', 'break', 'next', 'redo',
  'retry', 'begin', 'rescue', 'ensure', 'raise', 'include', 'extend', 'prepend',
  'attr_accessor', 'attr_reader', 'attr_writer', 'self', 'super', 'nil',
  'true', 'false', 'require', 'puts', 'print', 'p', 'module_function', 'private',
  'protected', 'public'
]);

export function highlightSql(text) {
  if (!text) return '';

  return text.replace(
    /(--[^\n]*)|("(?:\\.|[^"\\])*")|('(?:\\.|[^'\\])*')|(\b\d+(?:\.\d+)?\b)|(\b[a-zA-Z_][a-zA-Z0-9_]*\b)|([=<>*+/%!&|;,()]+)/g,
    (match, comment, doubleStr, singleStr, num, word, op) => {
      if (comment) return chalk.gray(comment);
      if (doubleStr || singleStr) return chalk.greenBright(match);
      if (num) return chalk.yellowBright(num);
      if (word) {
        const lower = word.toLowerCase();
        if (SQL_KEYWORDS.has(lower)) {
          return chalk.cyanBright.bold(word);
        }
        if (lower.startsWith('pg_') || ['count', 'sum', 'avg', 'min', 'max', 'generate_series', 'coalesce', 'now'].includes(lower)) {
          return chalk.magentaBright(word);
        }
        return chalk.white(word);
      }
      if (op) {
        if (op === ';' || op === ',') return chalk.gray(op);
        return chalk.yellow(op);
      }
      return match;
    }
  );
}

export function highlightBash(text) {
  if (!text) return '';

  return text.replace(
    /(#[^\n]*)|('(?:\\.|[^'\\])*')|("(?:\\.|[^"\\])*")|(\$(?:\{[^}]+\}|[a-zA-Z0-9_#?!*@]+))|((?:^|\s)-[a-zA-Z0-9_-]+)|(\b\d+\b)|(\b[a-zA-Z_][a-zA-Z0-9_]*\b)|(\|\||&&|2>&1|&>|>>|>|<|\||!|[=;]+)/g,
    (match, comment, singleStr, doubleStr, variable, flag, num, word, op) => {
      if (comment) return chalk.gray(comment);
      if (singleStr || doubleStr) return chalk.greenBright(match);
      if (variable) return chalk.magentaBright.bold(variable);
      if (flag) return chalk.yellow(flag);
      if (num) return chalk.yellowBright(num);
      if (word) {
        if (BASH_KEYWORDS.has(word)) {
          return chalk.cyanBright.bold(word);
        }
        return chalk.white(word);
      }
      if (op) {
        return chalk.yellowBright(op);
      }
      return match;
    }
  );
}

export function highlightRuby(text) {
  if (!text) return '';

  return text.replace(
    /(#[^\n]*)|('(?:\\.|[^'\\])*')|("(?:\\.|[^"\\])*")|(:[a-zA-Z_][a-zA-Z0-9_]*|\b[a-zA-Z0-9_]+:)|(@@?[a-zA-Z_][a-zA-Z0-9_]*)|(\b\d+\b)|(\b[a-zA-Z_][a-zA-Z0-9_]*[!?]?\b)|([=<>*+/%!&|;,{}()]+)/g,
    (match, comment, singleStr, doubleStr, symbol, instVar, num, word, op) => {
      if (comment) return chalk.gray(comment);
      if (singleStr || doubleStr) return chalk.greenBright(match);
      if (symbol) return chalk.magentaBright(symbol);
      if (instVar) return chalk.yellowBright(instVar);
      if (num) return chalk.yellowBright(num);
      if (word) {
        if (RUBY_KEYWORDS.has(word)) {
          return chalk.cyanBright.bold(word);
        }
        if (['map', 'select', 'reject', 'reduce', 'inject', 'tally', 'find', 'each', 'dig', 'slice', 'fetch', 'transform_keys', 'transform_values', 'inspect', 'to_s', 'to_i', 'to_a', 'sum', 'even?', 'odd?', 'nil?', 'empty?', 'include?'].includes(word)) {
          return chalk.yellow(word);
        }
        return chalk.white(word);
      }
      if (op) {
        return chalk.yellowBright(op);
      }
      return match;
    }
  );
}

export function highlightCode(text, lang = 'bash') {
  if (!text) return '';
  if (lang === 'sql') {
    return highlightSql(text);
  }
  if (lang === 'ruby') {
    return highlightRuby(text);
  }
  return highlightBash(text);
}
