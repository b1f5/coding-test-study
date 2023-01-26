function solution(number, k) {
  let result = '';
  let stack = [];
  let deleteCount = k;

  let currentNumber = '';
  for(let i=0; i<number.length; i+=1) {
    currentNumber = parseInt(number[i]);

    let top = -1;
    while(true) {
      top = parseInt(stack.at(-1));

      // 반복문 종료 조건
      if(stack.length === 0) break;
      if(deleteCount === 0) break;
      if(top >= currentNumber) break;

      // 현재의 값보다 stack의 top이 작을 경우 pop
      stack.pop();
      deleteCount -= 1;
    }

    stack.push(currentNumber);
  }

  while(deleteCount) {
    stack.pop();
    deleteCount -= 1;
  }
  result = stack.join('');

  return result;
}