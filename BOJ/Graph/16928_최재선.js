/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const [counts, ...rest] = input;

function solution() {
  let result = 0;
  const moves = [1, 2, 3, 4, 5, 6];
  const visited = new Array(101).fill(false);
  const events = new Array(101).fill().map((el, idx) => idx);

  for (const event of rest) {
    const [depart, dest] = event.split(' ').map((el) => Number(el));

    events[depart] = dest;
  }

  let queue = [1];
  visited[1] = true;

  while (true) {
    result += 1;
    const newQueue = [];
    for (const pos of queue) {
      for (const move of moves) {
        const newPos = events[pos + move];

        if (!visited[newPos]) {
          visited[newPos] = true;

          if (newPos === 100) {
            console.log(result);
            return;
          }
          newQueue.push(newPos);
        }
      }
    }

    queue = newQueue;
  }
}

solution();
