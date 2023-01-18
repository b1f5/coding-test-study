/**
 * num개로 이루어진 가능한 모든 조합을 반환하는 함수
 *
 * @param {string[]} order
 * @param {number[]} num 조합을 이룰 order의 개수
 * @returns
 */
function getCombination(order, num) {
  let result = [];

  if (num === 1) return order.map((el) => [el]);

  order.forEach((fixed, idx) => {
    let rest = order.slice(idx + 1);
    let combinationList = getCombination(rest, num - 1);
    let attached = combinationList.map((el) => [fixed, ...el]);

    result.push(...attached);
  });

  return result.map((el) => el.sort().join(''));
}

function solution(orders, course) {
  let result = [];
  let combinationCount = {};

  orders.forEach((order) => {
    course.forEach((num) => {
      getCombination(order.split(''), num).forEach((el) => {
        combinationCount[el] = combinationCount[el] + 1 || 1;
      });
    });
  });

  course.forEach((num) => {
    let maxOrderCount = 0;

    for (const KEY in combinationCount) {
      if (num !== KEY.length) continue;
      if (combinationCount[KEY] > maxOrderCount) {
        maxOrderCount = combinationCount[KEY];
      }
    }

    for (const KEY in combinationCount) {
      if (KEY.length !== num) continue;
      if (combinationCount[KEY] < 2) continue;
      if (combinationCount[KEY] === maxOrderCount) {
        result.push(KEY);
      }
    }
  });

  console.log(combinationCount);
  result = result.sort();
  return result;
}