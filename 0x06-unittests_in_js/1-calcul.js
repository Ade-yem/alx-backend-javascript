function calculateNumber(a, b, type) {
  const types = ['SUM', 'SUBTRACT', 'DIVIDE'];
  if (types.includes(type)) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    } else if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    } else if (type === 'DIVIDE') {
      if (Math.round(b) === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    }
  }
  return undefined;
}
module.exports = calculateNumber;
