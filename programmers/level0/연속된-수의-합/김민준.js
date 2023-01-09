function solution(num, total) {
  let answer = [];
  let start = Math.ceil(total / num) - Math.floor(num / 2);
  let end = Math.floor(total / num) + Math.floor(num / 2);
  
  for(let i=start; i<=end; i+=1) {
      answer.push(i);
  }
  
  return answer;
}