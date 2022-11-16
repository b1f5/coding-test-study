function solution(survey, choices) {
  const score = Array.from({ length: 7 }, (_, i) => Math.abs(3 - i));
  const map = new Map();

  survey.forEach((type, i) => {
    const [disAgree, agree] = type.split('');
    const picked = choices[i] - 1;
    picked < 3
      ? setScore(map, disAgree, score[picked])
      : setScore(map, agree, score[picked]);
  });
  return pickType(map);
}

function setScore(map, type, score) {
  const currentScore = map.get(type);
  map.set(type, currentScore + score || score);
}

function pickType(map) {
  const types = ['RT', 'CF', 'JM', 'AN'];
  return types
    .map((type) => type.split(''))
    .reduce((res, [typeA, typeB]) => {
      if (getScore(typeA) >= getScore(typeB)) res += typeA;
      else res += typeB;
      return res;
    }, '');

  function getScore(key) {
    return map.get(key) || 0;
  }
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
