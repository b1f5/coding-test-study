// @ts-check
/**
 * @param {number} w
 * @param {number} h
 * @returns {number}
 */
function solution(w, h) {
  const totalCount = h * w;
  let prevY = 0;
  let unusableCount = 0;

  for (let i = 1; i <= w; i += 1) {
    const currY = i * h / w;
    unusableCount += Math.ceil(currY) - Math.floor(prevY);
    prevY = currY;
  }

  return totalCount - unusableCount;
}
