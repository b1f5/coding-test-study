// @ts-check
/**
 * @param {number} number 기사단원의 수를 나타내는 정수
 * @param {number} limit 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수
 * @param {number} power 제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수
 * @returns {number} 무기를 모두 만들기 위해 필요한 철의 무게
 */
function solution(number, limit, power) {
  const powers = [...new Array(number)].map((_, i) => countDivisors(i + 1));

  const limitedPowers = powers.map((currentPower) => {
    if (currentPower > limit) return power;
    else return currentPower;
  });

  const requiredIronWeight = limitedPowers.reduce(
    (currentIronWeight, ironWeight) => currentIronWeight + ironWeight,
    0
  );

  return requiredIronWeight;
}

/**
 * @param {number} number 약수의 개수를 구할 수
 * @returns {number} 약수의 개수
 */
function countDivisors(number) {
  if (number === 1) return number;

  const squareRoot = Math.sqrt(number);
  const isSquareNumber = Number.isInteger(squareRoot);

  let count = 0;

  for (let i = 1; i < squareRoot; i += 1) {
    if (number % i === 0) count += 1;
  }

  return isSquareNumber ? count * 2 + 1 : count * 2;
}
