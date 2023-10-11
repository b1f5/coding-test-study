const fs = require('fs');

let [n, args] = fs.readFileSync('./input.txt').toString().trim().split('\n');
n = Number(n);
args = args.split(' ').map(Number);

const increaseMemo = new Array(n).fill(null);
const decreaseMemo = new Array(n).fill(null);

const increaseDict = new Array(1001).fill(0);
const decreaseDict = new Array(1001).fill(0);

for (let i = 0; i < n; i += 1) {
  const num = args[i];

  let increaseTmpMax = 0;

  for (let j = 0; j < num; j += 1) {
    const increaseDictNum = increaseDict[j];
    if (increaseDictNum > increaseTmpMax) increaseTmpMax = increaseDictNum;
  }

  increaseTmpMax += 1;

  increaseDict[num] = Math.max(increaseDict[num], increaseTmpMax);

  increaseMemo[i] = Math.max(...increaseDict);
}

for (let i = n - 1; i >= 0; i -= 1) {
  const num = args[i];

  let decreaseTmpMax = 0;

  for (let j = 0; j < num; j += 1) {
    const decreaseDictNum = decreaseDict[j];
    if (decreaseDictNum > decreaseTmpMax) decreaseTmpMax = decreaseDictNum;
  }

  decreaseTmpMax += 1;

  decreaseDict[num] = Math.max(decreaseDict[num], decreaseTmpMax);

  decreaseMemo[i] = Math.max(...decreaseDict);
}

let result = 0;

for (let i = 0; i < n; i += 1) {
  result = Math.max(result, increaseMemo[i] + decreaseMemo[i] - 1);
}

console.log(result);
