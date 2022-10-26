function solution(n) {
  let count = 0;
  let num = 0;
  while(count < n) {
      num += 1;
      // num이 3의 배수이거나 3이 들어가있지 않을때만 count += 1
      if(!(num % 3 === 0 || String(num).includes('3'))) count += 1;
  }
  
  return num;
}