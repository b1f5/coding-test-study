// a = 콜라를 받기 위해 마트에 주어야 하는 병 수
// b = a개를 가져다 줬을때 주는 병의 개수
// n = 가지고 있는 빈 병의 개수
function solution(a, b, n) {
  let answer = 0;
  let rest = 0;
  
  while(n >= a) {
      // a개씩 줬을 때 남은 병의 개수
      rest = n % a;
      // a개씩 줬을 때 b개씩 돌려 받은 총 병의 개수
      n = Math.floor(n / a) * b;
      answer += n;
      // 주지 못한 남은 병의 개수를 가지고 있는 빈 병의 개수에 더해줌
      n += rest;
  }
  
  return answer;
}