/**
 * @param {number} k
 * @param {number[][]} dungeons
 * @returns {number}
 */
function solution(k, dungeons) {
  const n = dungeons.length;
  const cntArr = [];

  const arr = Array.from({ length: n }, (_, i) => i); // [0,1,2]
  const orders = getPermutations(arr, n); // [012, 021, 102, 120, 210, 201]
  const powers = Array(orders.length).fill(k); // [80 80 80 80 80 80]

  orders.forEach((order, i) => {
    let cnt = 0;
    let power = powers[i];
    for (let j = 0; j < order.length; j++) {
      const [need, consume] = dungeons[order[j]];
      if (need <= power) {
        power -= consume;
        cnt++;
      } else {
        break;
      }
    }
    cntArr.push(cnt);
    cnt = 0;
  });

  return Math.max(...cntArr);
}
const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

// 정렬을 해봤자 고려해야할게 두가지여서 의미가 없어보임
// 던전의 최대갯수가 어차피 8이라 그냥 다 돌아야 한다

// prettier-ignore
console.log(solution(80, [[80, 20], [50, 40], [30, 10]])); // 3
