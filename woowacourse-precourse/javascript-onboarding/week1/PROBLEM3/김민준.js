function solution() {
  const NUMBER = 13; // 4
  // const NUMBER = 33; // 14
  let numberListString = '';

  for (let i = 1; i <= NUMBER; i += 1) {
    numberListString += String(i);
  }

  const RESULT = numberListString
    .split('')
    .filter((el) => el == 3 || el == 6 || el == 9).length;

  return RESULT;
}

const RESULT = solution();
console.log(RESULT);
