/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const props = path.split('.');
  let i = 0;
  return (obj) => {
    while (i < props.length && typeof obj === 'object') {
      const map = new Map(Object.entries(obj));
      obj = map.get(props[i++]);
    }
    return obj;
  }
}
