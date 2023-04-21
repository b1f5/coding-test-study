const [t, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < inputs.length; i += 3) {
  const p = inputs[i];
  const n = +inputs[i + 1];
  const arr = JSON.parse(inputs[i + 2]);

  let head = 0;
  let tail = n - 1;
  let isReverse = false;
  let isError = false;

  for (const f of p) {
    if (f === "R") {
      isReverse = !isReverse;
    }
    if (f === "D") {
      if (head > tail) {
        isError = true;
        break;
      }
      if (isReverse) {
        tail -= 1;
      } else head += 1;
    }
  }

  if (isError) console.log("error");
  else {
    let answer = arr.slice(head, tail + 1);
    answer = isReverse ? answer.reverse() : answer;
    console.log(JSON.stringify(answer));
  }
}
