// @ts-check
/**
 * @param {number} n
 * @param {number[][]} wires
 * @returns {number}
 */
function solution(n, wires) {
  // 전력망 둘로 나누기
  const grid1 = new Set();
  const grid2 = new Set();
  // 차이값 넣어둘 배열 선언
  const diffs = [];

  // wires 하나씩 순회하며 끊기
  for (let i = 0; i < wires.length; i += 1) {
    const [tower1, tower2] = wires[i];

    grid1.add(tower1);
    grid2.add(tower2);

    let restWires = [...wires.slice(0, i), ...wires.slice(i + 1)];

    while (true) {
      if (restWires.length === 0) break;

      for (let j = 0; j < restWires.length; j += 1) {
        const [tower1, tower2] = restWires[j];

        if (grid1.has(tower1) || grid1.has(tower2)) {
          grid1.add(tower1);
          grid1.add(tower2);
          restWires.splice(j, 1);
        } else if (grid2.has(tower1) || grid2.has(tower2)) {
          grid2.add(tower1);
          grid2.add(tower2);
          restWires.splice(j, 1);
        }
      }
    }

    const diff = Math.abs(grid1.size - grid2.size);

    if (diff === 0) return diff;
    else diffs.push(diff);

    grid1.clear();
    grid2.clear();
  }

  return Math.min(...diffs);
}
