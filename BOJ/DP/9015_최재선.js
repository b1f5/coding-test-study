const fs = require('fs');

const filePath = process.platform === 'linux' ? './input.txt' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const numConvertedInput = input.map((el) => Number(el));
const [_, ...rest] = numConvertedInput;
const biggestNum = Math.max(...rest);
const dp = new Array(biggestNum + 1).fill(null);

dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

const func = (num) => {
  if (num <= 0) return 0;
  if (dp[num]) return dp[num];

  const value = func(num - 1)
    + func(num - 2)
    + func(num - 3);

  dp[num] = value;

  return dp[num];
};

func(11);

console.log('dp: ', dp);
