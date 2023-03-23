// @ts-check
/**
 * slice를 활용한 풀이
 * @param {string} skill 선행 스킬 순서
 * @param {string[]} skill_trees 유저들이 만든 스킬트리
 * @returns {number} 가능한 스킬트리 개수
 */
function solution(skill, skill_trees) {
  // 선행 스킬 순서를 배열로 만든다.
  // ["C", "B", "D"]
  const standardSkillTree = skill.split("");

  // 유저들이 만든 스킬트리를 하나씩 순회한다.
  return skill_trees.reduce((answer, skill_tree) => {
    // 현재 유저의 스킬트리를 배열로 만든다.
    // ["B", "A", "C", "D", "E"]
    const userSkills = skill_tree.split("");

    // 현재 유저의 스킬을 순회하면서 선행 스킬 순서에 있지 않은 스킬을 필터링한다.
    // ["B", "C", "D"]
    const skillsOnTree = userSkills.filter((userSkill) =>
      standardSkillTree.includes(userSkill)
    );
    // 필터링 된 스킬 중 첫번째 스킬(B)의 인덱스를 선행 스킬 순서에서 찾는다.
    // 2
    const firstSkillIndex = standardSkillTree.findIndex(
      (skill) => skill === skillsOnTree[0]
    );
    // 선행 스킬 트리를 첫번째 스킬의 인덱스(2)부터 필터링 된 스킬의 길이(3)를 인덱스로 사용해서 자른다.
    // standardSkillTree.slice(2, 3) -> ["B", "D"]
    const partialSkillTree = standardSkillTree
      .slice(firstSkillIndex, skillsOnTree.length)
      .join("");

    // 유저의 스킬 트리와 slice한 부분 스킬 트리를 비교해서 일치하면 answer를 1 증가시킨다.
    // 유저의 스킬 트리가 C로 시작해야만 일치할 수 있다.
    // BCD === BD -> false
    if (skillsOnTree.join("") === partialSkillTree) answer += 1;

    return answer;
  }, 0);
}

/**
 * 인덱스를 활용한 풀이
 * @param {string} skill 선행 스킬 순서
 * @param {string[]} skill_trees 유저들이 만든 스킬트리
 * @returns {number} 가능한 스킬트리 개수
 */
function solution(skill, skill_trees) {
  const standardSkillTree = skill;
  const standardSkillTreeLength = standardSkillTree.length;

  // 유저들이 만든 스킬트리를 하나씩 순회하며 가능한 스킬트리일 때만 1을 더한다.
  return skill_trees.reduce((answer, skillTree) => {
    const skillTreeLength = skillTree.length;
    // 스킬의 인덱스들을 담을 배열을 만든다.
    const skillIndexes = [];

    // 스킬을 하나씩 순회한다.
    for (let i = 0; i < skillTreeLength; i += 1) {
      const skill = skillTree[i];
      // 선행 스킬 트리에서 유저의 현재 스킬을 찾는다.
      const skillIndex = standardSkillTree.indexOf(skill);
      // 스킬 트리에 존재하지 않는 스킬이면 다음 스킬로 넘어간다.
      if (skillIndex === -1) continue;

      // 존재하는 스킬이면 스킬 인덱스 배열에 현재 스킬의 인덱스를 넣는다.
      skillIndexes.push(skillIndex);
      // 스킬 인덱스 배열의 길이를 구한다.
      const skillIndexesLength = skillIndexes.length;
      // 현재 스킬의 인덱스가 스킬 인덱스 배열의 마지막 요소의 인덱스와 일치 하지 않으면 
      // 0, 1, 2 순서대로 들어간 것이 아니므로 불가능한 스킬트리이다.
      if (skillIndex !== skillIndexesLength - 1) return answer;
      // 스킬 인덱스 배열의 길이와 선행 스킬 트리의 개수가 같아지면 더이상 순회를 안해도 된다.
      if (skillIndexesLength === standardSkillTreeLength) break;
    }

    // 반복문을 통과했다면 가능한 스킬 트리이므로 answer에 1을 더한다.
    return answer + 1;
  }, 0);
}
