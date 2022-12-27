/**
 *
 * @param {string} 1<=numbers.length<=7
 * @returns {number}
 */
function solution(numbers) {
  let answer = 0;
  const allCases = [];
  const arr = numbers.split("");
  for (let i = 1; i <= numbers.length; i += 1) {
    allCases.push(...getPermutation(arr, i));
  }
  const setOfAll = new Set(allCases.map((arr) => Number(arr.join(""))));

  for (const i of setOfAll) {
    if (isPrimeNumber(i)) answer += 1;
  }

  return answer;
}

function isPrimeNumber(n) {
  let cnt = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) cnt++;
  }
  return cnt === 1;
}

const getPermutation = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((v) => [v]);
  else {
    arr.forEach((fixed, index, origin) => {
      // fixed를 제외한 모든 값을 담은 배열 rest
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutation(rest, selectNumber - 1);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      results.push(...attached);
    });
  }
  return results;
};
