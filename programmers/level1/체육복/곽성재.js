/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42862
 * @param {number} n
 * @param {number[]} lost
 * @param {number[]} reserve
 * @returns
 */
function solution(n, lost, reserve) {
  const borrowed = [];
  // 반드시 빌려야 하는 === 잃어버렸는데 여벌이 없는
  const filtered_lost = lost.filter((n) => !reserve.includes(n));
  // 빌려줄 수 있는 === 여벌이 있는데 잃어버리지 않은
  const filtered_reserve = reserve
    .filter((n) => !lost.includes(n))
    .sort((a, b) => a - b); // sort가 없으면 2개 실패

  // 빌려줄 수 있는 배열을 순회하면서
  for (let i = 0; i < filtered_reserve.length; i++) {
    // 해당 학생의 번호와 앞, 뒤 학생의 번호
    const student_number = filtered_reserve[i];
    const possible1 = student_number - 1;
    const possible2 = student_number + 1;

    if (filtered_lost.includes(possible1) && !borrowed.includes(possible1)) {
      borrowed.push(possible1);
      continue;
    }
    if (filtered_lost.includes(possible2) && !borrowed.includes(possible2)) {
      borrowed.push(possible2);
    }
  }

  return n - filtered_lost.length + borrowed.length;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
