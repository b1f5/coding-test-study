const input = require("fs").readFileSync("/dev/stdin");

let star = "";

for (let i = 0; i < input; i += 1) {
  star += "*";
  console.log(star);
}
