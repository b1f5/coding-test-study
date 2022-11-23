function solution(n) {
  const sqrtOfNum = Math.sqrt(n);
  if (sqrtOfNum === Math.floor(sqrtOfNum)) {
    return Math.pow(sqrtOfNum + 1, 2);
  } else {
    return -1;
  }
}

console.log(solution(121));
console.log(solution(3));
