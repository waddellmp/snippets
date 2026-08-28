export const STRICT_MODE_CHALLENGES = [
  {
    id: 'bash-strict-mode-all',
    domain: 'bash',
    category: 'strict_mode',
    subcategory: 'strict_mode',
    title: 'Strict Mode: Unofficial Strict Mode Boilerplate',
    task: 'Write the combined set command for unofficial bash strict mode that enables exit on error, exit on unset variables, and catches pipeline failures.',
    hint: 'set -euo pipefail',
    referenceSolution: 'set -euo pipefail',
    validate: (output, userCommand) => {
      const cmd = userCommand.trim();
      return (
        cmd === 'set -euo pipefail' ||
        cmd === 'set -e -u -o pipefail' ||
        (cmd.includes('set') && cmd.includes('-e') && cmd.includes('-u') && cmd.includes('pipefail'))
      );
    },
    resource: 'resources/linux/bash/set_strict_mode.sh'
  },
  {
    id: 'bash-set-errexit',
    domain: 'bash',
    category: 'strict_mode',
    subcategory: 'strict_mode',
    title: 'Shell Options: Exit Immediately on Failure (errexit)',
    task: 'Write the set flag command to enable the "errexit" option in Bash so scripts abort immediately if any command returns a non-zero exit status.',
    hint: 'set -e',
    referenceSolution: 'set -e',
    validate: (output, userCommand) => {
      const cmd = userCommand.trim();
      return cmd === 'set -e' || cmd === 'set -o errexit';
    },
    resource: 'resources/linux/bash/set_options_overview.sh'
  },
  {
    id: 'bash-set-nounset',
    domain: 'bash',
    category: 'strict_mode',
    subcategory: 'strict_mode',
    title: 'Shell Options: Treat Unset Variables as Errors (nounset)',
    task: 'Write the set flag command to enable the "nounset" option in Bash so referencing an undefined variable throws an error and aborts.',
    hint: 'set -u',
    referenceSolution: 'set -u',
    validate: (output, userCommand) => {
      const cmd = userCommand.trim();
      return cmd === 'set -u' || cmd === 'set -o nounset';
    },
    resource: 'resources/linux/bash/set_options_overview.sh'
  },
  {
    id: 'bash-set-pipefail',
    domain: 'bash',
    category: 'strict_mode',
    subcategory: 'strict_mode',
    title: 'Shell Options: Catch Pipeline Failures (pipefail)',
    task: 'Write the set option command to ensure a pipeline returns the exit code of the last failing command instead of just the final command.',
    hint: 'set -o pipefail',
    referenceSolution: 'set -o pipefail',
    validate: (output, userCommand) => {
      const cmd = userCommand.trim();
      return cmd === 'set -o pipefail';
    },
    resource: 'resources/linux/bash/set_strict_mode.sh'
  },
  {
    id: 'bash-set-xtrace',
    domain: 'bash',
    category: 'strict_mode',
    subcategory: 'strict_mode',
    title: 'Shell Options: Debug Execution Tracing (xtrace)',
    task: 'Write the set flag command to enable execution tracing in Bash so each command and its expanded arguments are printed before execution.',
    hint: 'set -x',
    referenceSolution: 'set -x',
    validate: (output, userCommand) => {
      const cmd = userCommand.trim();
      return cmd === 'set -x' || cmd === 'set -o xtrace';
    },
    resource: 'resources/linux/bash/set_options_overview.sh'
  }
];
