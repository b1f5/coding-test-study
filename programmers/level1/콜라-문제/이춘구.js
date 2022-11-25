// @ts-check
/**
 * @param {*} requiredBottleCount 콜라를 받기 위해 마트에 주어야 하는 병 수
 * @param {*} newColaCount 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수
 * @param {*} myBottleCount 가지고 있는 빈 병의 개수
 * @returns {number} 받을 수 있는 콜라의 총 병 수
 */
function solution(requiredBottleCount, newColaCount, myBottleCount) {
  // 받을 수 있는 콜라의 총 병 수를 0으로 초기화한다.
  let answer = 0;

  // 가지고 있는 빈 병의 개수가 마트에 줘야 하는 빈 병의 개수 미만이 될 때까지 반복한다.
  while (myBottleCount >= requiredBottleCount) {
    // 마트에 현재 가지고 있는 빈 병을 갖다주면 얻을 수 있는 콜라의 개수를 구한다.
    const newCola =
      Math.floor(myBottleCount / requiredBottleCount) * newColaCount;
    // 갖다 주고 남은 빈 병의 개수를 구한다.
    const restEmptyBottle = myBottleCount % requiredBottleCount;
    // 마트에서 받은 콜라와 남은 빈 병의 개수를 더해서 가지고 있는 빈 병의 개수로 한다.
    myBottleCount = restEmptyBottle + newCola;
    // 마트에서 받을 콜라 개수를 answer에 더한다.
    answer += newCola;
  }

  return answer;
}
