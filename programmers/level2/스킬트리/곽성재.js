function solution(skill, skill_trees) {
  let answer = 0;

  const skillRule = skill.split(""); // [C, B, D]

  skill_trees.forEach((el) => {
    let indexOfUserSkill = []; // 여기에 유저의 스킬트리에서 선행스킬순서와 겹치는 애들의 인덱스만 넣어줄거임

    for (let i = 0; i < el.length; i++) {
      const userSkill = el[i];
      if (skillRule.includes(userSkill)) {
        indexOfUserSkill.push(skillRule.indexOf(userSkill));
      }
    }

    if (validateOrder(indexOfUserSkill)) {
      answer += 1;
    }
  });

  return answer;
}

function validateOrder(arr) {
  let idx = 0;
  while (idx < arr.length) {
    const valOfIdx = arr[idx];
    if (idx !== valOfIdx) {
      break;
    }
    idx++;
  }
  return idx === arr.length;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA", "XU"])); // 3
