/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    s.length !== t.length ? false : null;
  let mapObjS = {};
  let mapObjT = {};
  for (let i = 0; i < s.length; ++i) {
    const char1 = s[i],
      char2 = t[i];
    if (mapObjS[char1]) {
      if (mapObjS[char1] !== char2) {
        return false;
      }
    } else {
      mapObjS[char1] = char2;
    }
    if (mapObjT[char2]) {
      if (mapObjT[char2] !== char1) {
        return false;
      }
    } else {
      mapObjT[char2] = char1;
    }
  }
  return true;
};