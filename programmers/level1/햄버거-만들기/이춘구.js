// @ts-check
/**
 * @param {number[]} ingredient 상수에게 전해지는 재료의 정보를 나타내는 정수 배열
 * @returns 상수가 포장하는 햄버거의 개수
 */
function solution(ingredient) {
  let answer = 0;

  const stack = [];

  for (let i = 0; i < ingredient.length; i += 1) {
    stack.push(ingredient[i]);

    if (stack.length < 4) continue;

    if (ingredient[i] === 1) {
      const stackLastIndex = stack.length - 1;
      const fourIngredients = stack
        .slice(stackLastIndex - 3, stackLastIndex + 1)
        .join("");

      if (fourIngredients === "1231") {
        stack.splice(stackLastIndex - 3, 4);
        answer += 1;
      }
    }
  }

  return answer;
}
