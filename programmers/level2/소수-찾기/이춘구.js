// @ts-check
/**
 * @param {string} numbers 각 종이 조각에 적힌 숫자가 적힌 문자열
 * @returns {number} 종이 조각으로 만들 수 있는 소수의 갯수
 */
function solution(numbers) {
  let answer = 0;

  const NUMBERS = numbers.split("");

  const permutations = [];

  for (let i = 1; i <= NUMBERS.length; i += 1) {
    permutations.push(...getPermutations(NUMBERS, i));
  }

  const permutationsSet = new Set();

  permutations.forEach((permutation) =>
    permutationsSet.add(Number(permutation.join("")))
  );

  permutationsSet.forEach((permutation) => {
    if (isPrime(permutation)) answer += 1;
  });

  return answer;
}

/**
 * @param {string[]} arr
 * @param {number} r
 * @returns {string[][]}
 */
function getPermutations(arr, r) {
  if (r === 1) return arr.map((el) => [el]);

  const result = [];

  arr.forEach((fixed, index, array) => {
    const rest = [...array.slice(0, index), ...array.slice(index + 1)];
    const restPermutations = getPermutations(rest, r - 1);
    const attached = restPermutations.map((permutation) => [
      fixed,
      ...permutation,
    ]);

    result.push(...attached);
  });

  return result;
}

/**
 * @param {number} number
 * @returns {boolean}
 */
function isPrime(number) {
  if (number < 2) return false;

  const sqrt = Math.floor(Math.sqrt(number));

  for (let i = 2; i <= sqrt; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
}
