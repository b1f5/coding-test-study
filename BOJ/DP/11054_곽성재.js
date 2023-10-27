const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const nums = input[1].split(" ").map(Number);
const nums2 = nums.slice().reverse();

let answer = 0;

const dpIncrease = Array(nums.length);
dpIncrease[0] = 1;
for (let i = 1; i < dpIncrease.length; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j] && dpIncrease[j] > max) {
      max = dpIncrease[j];
    }
    dpIncrease[i] = max + 1;
  }
}

const dpDecrease = Array(nums2.length);
dpDecrease[0] = 1;
for (let i = 1; i < dpDecrease.length; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (nums2[i] > nums2[j] && dpDecrease[j] > max) {
      max = dpDecrease[j];
    }
    dpDecrease[i] = max + 1;
  }
}
dpDecrease.reverse();
for (let i = 0; i < nums.length; i++) {
  // console.log({ dec: dpDecrease[i], inc: dpIncrease[i] });
  answer = Math.max(answer, dpDecrease[i] + dpIncrease[i] - 1);
}

console.log(answer);
