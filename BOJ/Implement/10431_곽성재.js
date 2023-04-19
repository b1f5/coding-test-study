const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, ...arr] = input;

const result = [];

for (const _ of arr) {
  const [n, ...students] = _.split(" ").map(Number);

  let cnt = 0;

  // for (let i = 1; i < 20; i++) {
  //   cnt += students.slice(0, i).filter((el) => el > students[i]).length;
  // }

  const lines = [students[0]];

  for (let i = 1; i < 20; i++) {
    const MAX = Math.max(...lines);
    // const MAX = Math.max(...students.slice(0, i));
    const target = students[i];
    if (MAX < target) {
      lines.push(target);
    } else {
      const idx = lines.findIndex((el) => el > target);
      // const idx = students.slice(0, i).findIndex((el) => el > target);
      lines.splice(idx, 0, target);
      cnt += i - idx;
    }
  }

  result.push(`${n} ${cnt}`);
}
console.log(result.join("\n"));
