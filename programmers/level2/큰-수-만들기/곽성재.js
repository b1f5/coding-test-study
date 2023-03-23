function solution(number, k) {
  let answer = "";
  let cnt_delete = 0;
  let stack = [];
  //자릿수가 앞에있는애가 무조건 커야 큰수가된다..
  for (let i = 0; i < number.length; i++) {
    // 스택이 비어있지 않다면 큰 수를 판별한다
    while (stack.length !== 0) {
      // 카운트가 끝났으면 루프를 빠져나온다.
      if (cnt_delete === k) break;

      // 현재 스택에 있는 마지막 값이 비교하는 숫자보다 작다면 제거하고 카운트를 1 증가한다.
      if (stack[stack.length - 1] < number[i]) {
        ++cnt_delete;
        stack.pop();
      } else {
        break;
      }
    }
    // (스택이 비어있다면 + 브레이크로 빠져나왔을때) 다음 숫자를 넣는다.
    stack.push(number[i]);
  }
  // answer = stack.join('');
  answer = stack.join("").substring(0, number.length - k);
  console.log(stack);
  return answer;
}
