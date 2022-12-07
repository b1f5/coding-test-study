function solution(skill, skill_trees) {
  var answer = 0;
  const skillArray = skill.split("");
  skill_trees.forEach((tree) => {
    const temp = {};
    const treeSplited = tree.split("");
    skillArray.forEach((oneSkill) => {
      const indexOfSkill = treeSplited.indexOf(oneSkill);
      if (indexOfSkill !== -1) {
        temp[oneSkill] = indexOfSkill;
      } else {
        temp[oneSkill] = 50;
      }
      console.log(temp);
    });
    const indexArray = Object.values(temp);
    const stringIndexArray = indexArray.join("");
    console.log(stringIndexArray);
    const sortedindexArray = indexArray.sort().join("");
    console.log(sortedindexArray);
    if (stringIndexArray === sortedindexArray) {
      answer += 1;
    }
  });
  return answer;
}
const skill = "CBD";
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
console.log(solution(skill, skill_trees));
