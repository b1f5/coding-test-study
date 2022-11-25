function solution(a, b, n) {
  let totalBottleOfcoke = n;
  let cnt = 0;
  while (totalBottleOfcoke >= a) {
    let giveCoke = a * Math.floor(totalBottleOfcoke / a);
    let getCoke = b * Math.floor(totalBottleOfcoke / a);
    totalBottleOfcoke = totalBottleOfcoke - giveCoke + getCoke;
    cnt += getCoke;
  }
  return cnt;
}

// 19
console.log(solution(2, 1, 20));
// 9
console.log(solution(3, 1, 20));
