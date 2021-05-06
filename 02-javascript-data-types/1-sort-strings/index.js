/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortedArray = arr.slice();
  if (param == 'asc') {
    sortedArray.sort(compareAsc);
  } else {
    sortedArray.sort(compareDesc);
  }
  return sortedArray;
}

function compareAsc(a, b) {
  return a.localeCompare(b,'ru', { caseFirst : 'upper'} );
}

function compareDesc(a, b) {
  return b.localeCompare(a,'ru', { caseFirst : 'upper'} );
}
