function solution(ingredient) {
  const pattern = /1231/;
  let order = ingredient.join('');
  let count = 0;

  while (pattern.test(order)) {
    order = order.replace(pattern, '');
    count = count + 1;
  }
  return count;
}

// expected result : 2
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));

// expected result : 0
// console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
