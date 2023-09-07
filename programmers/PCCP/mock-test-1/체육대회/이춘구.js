function solution(ability) {
  let answer = 0;
  const abilityCount = ability.length;
  const sportsCount = ability[0].length;
  const pickedRow = new Array(abilityCount).fill(false);
  const pickedColumn = new Array(sportsCount).fill(false);

  pick(0, 0);

  function pick(count, sum) {
    if (count === sportsCount) {
      answer = Math.max(answer, sum);
      return;
    }

    for (let r = 0; r < abilityCount; r += 1) {
      if (pickedRow[r]) continue;
      for (let c = 0; c < sportsCount; c += 1) {
        if (pickedColumn[c]) continue;

        pickedRow[r] = true;
        pickedColumn[c] = true;
        pick(count + 1, sum + ability[r][c]);
        pickedRow[r] = false;
        pickedColumn[c] = false;
      }
    }
  }

  return answer;
}
