const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// splice returns array!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const [h, w] = input.splice(0, 1)[0].split(" ").map(Number);
// const [h, w] = input.shift().split(" ").map(Number);

const sky = input.map((el) => el.split(""));
// console.table(sky);

// const result = new Array(h).fill(new Array(w).fill(-1));
const result = sky.map((arr) => arr.map((_) => (_ === "." ? -1 : 0)));

result.forEach((row, idx, arr) => {
  for (let i = 1; i < w; i++) {
    if (row[i] === -1) {
      for (let j = i - 1; j >= 0; j--) {
        if (row[j] === 0) {
          row[i] = i - j;
          break;
        }
      }
    }
  }
});

result.forEach((el) => console.log(el.join(" ")));
