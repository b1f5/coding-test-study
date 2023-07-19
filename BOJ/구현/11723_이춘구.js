const [M, ...operates] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let S = new Set([]);
const answer = [];

operates.forEach((operate) => {
  const [operator, x] = operate.split(" ");
  switch (operator) {
    case "add":
      if (!S.has(x)) S.add(x);
      break;
    case "remove":
      if (S.has(x)) S.delete(x);
      break;
    case "check":
      answer.push(S.has(x) ? 1 : 0);
      break;
    case "toggle":
      if (S.has(x)) S.delete(x);
      else S.add(x);
      break;
    case "all":
      S = new Set(Array.from({ length: 20 }, (_, i) => `${i + 1}`));
      break;
    case "empty":
      S = new Set([]);
      break;
  }
});

console.log(answer.join("\n"));
