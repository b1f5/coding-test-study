// 조합의 수
function solution(clothes) {
  let res = 1;
  const map = new Map();

  clothes.forEach((el) => {
    const [_, category] = el;
    map.set(category, (map.get(category) || 0) + 1);
  });

  for (const value of map.values()) {
    res *= value + 1;
  }
  return res - 1;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
);
