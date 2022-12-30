function solution(n, a, b) {
  let cnt = 0;
  
  while(true) {
    if(a === b) break;

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    cnt += 1;
  }

  return cnt;
}