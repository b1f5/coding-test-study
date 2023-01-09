function solution(n) {
  let cnt = 0;

  while(n) {
    if(n % 2 === 1) {
      cnt += 1;
    }
    n = Math.floor(n / 2);
  }

  return cnt;
}