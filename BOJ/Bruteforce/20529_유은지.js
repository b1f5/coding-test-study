const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const getDiff = (first, second) =>
  [...first].reduce((diff, char, i) => diff + (char !== second[i]), 0);

const getDist = (mbtiArr) => {
  if (mbtiArr.length >= 33) return 0;

  let min = Infinity;

  for (let i = 0; i < mbtiArr.length; i++) {
    for (let j = i + 1; j < mbtiArr.length; j++) {
      for (let k = j + 1; k < mbtiArr.length; k++) {
        const distance =
          getDiff(mbtiArr[i], mbtiArr[j]) +
          getDiff(mbtiArr[i], mbtiArr[k]) +
          getDiff(mbtiArr[j], mbtiArr[k]);

        min = Math.min(min, distance);
      }
    }
  }

  return min;
};

const answer = [];

for (let i = 2; i < input.length; i += 2) {
  const mbtiArr = input[i].split(' ');
  answer.push(getDist(mbtiArr));
}

console.log(answer.join('\n'));
