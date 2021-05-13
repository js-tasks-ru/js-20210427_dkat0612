/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (!string.length) return string;
  let i = 1;
  while(i < string.length && string[i] === string[0]) {
    ++i;
  }
  return (size > i ? string.slice(0, i) : string.slice(0, size)) + trimSymbols(string.slice(i), size);
}
