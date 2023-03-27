const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const students = [...new Array(30)].map((_, i) => i + 1);
input.forEach((inp) => (students[inp - 1] = 0));

console.log(students.filter((student) => student !== 0).join("\n"));
