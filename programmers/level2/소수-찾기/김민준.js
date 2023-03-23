/**
 * 소수인지 판단하는 함수
 * 
 * @param {number} number 
 * @returns {boolean}
 */
 function isPrimeNumber(number) {
  if(number < 2) return false;

  for(let i=2; i<=Math.sqrt(number); i+=1) {
    if(number % i === 0) return false;
  }
  return true;
}

// 순열을 저장할 Set(), 중복제거를 위해 Set으로 선언
let permutationList = new Set();
/**
 * 모든 순열을 구하는 함수
 * 
 * @param {string[]} numbers 
 * @param {string} fixed 고정 값
 */
function getPermutation(numbers, fixed) {
  if(numbers.length === 0) return;

  for(let i=1; i<numbers.length; i+=1) {
    let nextFixed = fixed + numbers[i];
    let nextNumbers = [...numbers];
    nextNumbers.splice(i, 1);

    if(isPrimeNumber(+nextFixed) === true) permutationList.add(+nextFixed);

    getPermutation(nextNumbers, nextFixed);
  }
}

function solution(numbers) {
  let answer = 0;

  numbers = numbers.split('');
  getPermutation(numbers, '');

  answer = permutationList.size;

  return answer;
}