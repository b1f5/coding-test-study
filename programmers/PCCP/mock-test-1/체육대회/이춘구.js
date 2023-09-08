function solution(ability) {
  let answer = 0;
  const studentCount = ability.length;
  const sportsCount = ability[0].length;
  const pickedStudent = new Array(studentCount).fill(false);

  pick(0, 0);

  function pick(count, sum) {
    if (count === sportsCount) {
      answer = Math.max(answer, sum);
      return;
    }

    for (let r = 0; r < studentCount; r += 1) {
      if (pickedStudent[r]) continue;

      pickedStudent[r] = true;
      pick(count + 1, sum + ability[r][count]);
      pickedStudent[r] = false;
    }
  }

  return answer;
}
