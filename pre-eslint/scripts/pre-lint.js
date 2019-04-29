const path = require('path');
const exec = require('child_process').exec;
const CLIEngine = require('eslint').CLIEngine;
const cli = new CLIEngine({
  // fix: true,
});
function getErrorLevel(number) {
  switch (number) {
  case 2:
    return 'error';
  case 1:
    return 'warn';
  default:
  }
  return 'undefined';
}
let pass = 0;

const pattern = '.(js|vue)$';
exec(`git diff --cached --name-only| grep -E '${pattern}'`, (error, stdout) => {
  if (stdout.length) {
    const array = stdout.split('\n').map(item => path.resolve(__dirname, '..', '..', item));
    array.pop();
    const results = cli.executeOnFiles(array).results;
    let errorCount = 0;
    let warningCount = 0;
    results.forEach((result) => {
      errorCount += result.errorCount;
      warningCount += result.warningCount;
      if (result.messages.length > 0) {
        console.log('\n');
        console.log(result.filePath);
        result.messages.forEach((obj) => {
          const level = getErrorLevel(obj.severity);
          console.log(`   ${obj.line}:${obj.column}  ${level}  ${obj.message}  ${obj.ruleId}`);
          pass = 1;
        });
      }
    });
    if (warningCount > 0 || errorCount > 0) {
      console.log(`\n   ${errorCount + warningCount} problems (${errorCount} ${'errors'} ${warningCount} warnings)`);
    }
    process.exit(pass);
  }
  if (error !== null) {
    console.log(`no js file commit, skip eslint`);
  }
});