const [_, ...commands] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const operations = {
  D: (n) => (2 * n) % 10000,
  S: (n) => (n === 0 ? 9999 : n - 1),
  // 1234 -> 2341
  L: (n) => (n % 1000) * 10 + Math.floor(n / 1000),
  // 1234 -> 4123
  R: (n) => (n % 10) * 1000 + Math.floor(n / 10),
};

const answers = [];

for (const command of commands) {
  const [input, output] = command.split(" ").map(Number);
  const candidates = [["", input]];
  const visited = new Array(9999).fill(false);

  while (candidates.length) {
    const [currOperations, currOutput] = candidates.shift();
    if (currOutput === output) {
      answers.push(currOperations);
      break;
    }

    visited[currOutput] = true;

    for (const operation in operations) {
      const nextOperations = currOperations + operation;
      const nextOutput = operations[operation](currOutput);

      if (visited[nextOutput]) continue;
      else visited[nextOutput] = true;

      candidates.push([nextOperations, nextOutput]);
    }
  }
}

console.log(answers.join("\n"));
