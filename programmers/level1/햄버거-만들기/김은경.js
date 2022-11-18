// slice(a, b) : 인덱스 a 부터 b-1 까지 잘라낸 배열을 반환
// splice(a, b) : 기존배열에서 인덱스 a 부터 b개의 요소를 삭제한 결과를 반환

function solution(ingredient) {
  let count = 0;
  const stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (stack.length < 4) continue;

    if (ingredient[i] === 1) {
      // 4번째 이후 들어온 재료가 빵인경우, 스택에 직전에 들어온 재료 3가지를 확인
      const breadOnTopIdx = stack.length - 1;
      const burger = stack.slice(breadOnTopIdx - 3, breadOnTopIdx + 1).join('');
      if (burger === '1231') {
        stack.splice(breadOnTopIdx - 3, 4); // 재료순서가 맞으면 스택에서 burger 삭제
        count += 1;
      }
    }
  }
  return count;
}

// expected result : 2
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));

// expected result : 0
// console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
