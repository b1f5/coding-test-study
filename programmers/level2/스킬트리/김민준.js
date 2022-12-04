function solution(skill, skill_trees) {
  let answer = 0;
  const REGEX = new RegExp(`[^${skill}]`, 'g');

  // 순서에 없는 스킬은 공백으로 치환
  skill_trees = skill_trees.map((el) => el.replace(REGEX, ''));

  // 순서 판단
  for (let i = 0; i < skill_trees.length; i += 1) {
    let isValid = true;
    for (let j = 0; j < skill_trees[i].length; j += 1) {
      if (skill[j] !== skill_trees[i][j]) {
        isValid = false;
        break;
      }
    }

    if (isValid) answer += 1;
  }

  return answer;
}
