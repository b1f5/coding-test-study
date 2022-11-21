function solution(ingredient) {
  let result = 0;

  let stack = [];
  for (let i = 0; i < ingredient.length; i += 1) {
    stack.push(ingredient[i]);

    if (stack.slice(-4).join('') === '1231') {
      result += 1;
      for (let j = 0; j < 4; j += 1) {
        stack.pop();
      }
    }
  }

  return result;
}
