export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  const filteredValues = Array.from(set)
  .filter(value => value.startsWith(startString))
  .map(value => value.slice(startString.length));
  return filteredValues.join("-");
}