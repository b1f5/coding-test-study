function solution(skill, skill_trees) {
  let res = 0;

  skill_trees.forEach((target) => {
    let filtered = (target.match(new RegExp(`[${skill}]`, 'g')) || []).join('');
    if (isOrdered(skill, filtered)) res += 1;
  });

  return res;
}

function isOrdered(pivot, target) {
  if (!target.length) return true;
  if (pivot[0] !== target[0]) return false;
  return isOrdered(pivot.slice(1), target.slice(1));
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA', 'AZ']));
