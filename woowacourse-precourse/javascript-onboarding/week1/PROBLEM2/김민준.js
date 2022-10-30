function solution() {
  const CRYPTOGRAM = 'browoanoommnaon';

  let preStackSize = 0;
  const recursion = (CRYPTOGRAM) => {
    let stack = [];
    let preLetter = '';
    let nextLetter = '';
    CRYPTOGRAM.split('').forEach((el, idx) => {
      nextLetter = CRYPTOGRAM[idx + 1];
      if(el !== preLetter && el !== nextLetter) stack.push(el); 
      preLetter = el;
    });

    // 만약 이전 단계의 재귀의 스택의 사이즈와 같은 사이즈라면
    // 중복되어서 사라진것이 없다는 뜻이므로
    // return 해서 재귀 종료
    if(stack.length === preStackSize) return stack.join('');
    preStackSize = stack.length;

    // 중복 제거한 stack으로 다시 재귀
    return recursion(stack.join(''));
  }

  const RESULT = `"${recursion(CRYPTOGRAM)}"`;
  return RESULT;
}

const RESULT = solution();
console.log(RESULT);