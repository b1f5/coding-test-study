/**
 * 그리디 알고리즘 거스름돈 유형
 * @param {number} money 거스름돈 총 금액
 * @returns {number[]} 가장 효율적인 거스름돈 개수 목록을 담은 배열
 */
function problem5(money) {
  const changeList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = Array.from({ length: changeList.length }, () => 0);

  let change;
  for (let i = 0; i < changeList.length; i++) {
    change = changeList[i];
    result[i] = parseInt(money / change);
    money %= change;
  }
  return result;
}
