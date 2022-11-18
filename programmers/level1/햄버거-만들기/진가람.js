function solution(ingredient) {
  const order = [1, 2, 3, 1]; // 빵 야채 고기 빵
  let count = 0;
  for (let i = 0; i < ingredient.length; i++) {
    for (let j = 0; j < order.length; j++) {
      if (order[j] !== ingredient[i + j]) break;
      if (j === order.length - 1) {
        ingredient.splice(i, 4);
        count++;
        i = i - 3;
      }
    }
  }
  return count;
}
