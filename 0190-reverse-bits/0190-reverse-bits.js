/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    const numWithBits = n.toString(2).padStart(32,"0").split("")
  const reversed = numWithBits.reverse().join("")
  return parseInt(reversed,2)
};