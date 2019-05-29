export default {
  sum(...argv) {
    return argv.reduce((sum, cur) => sum + cur, 0);
  }
}