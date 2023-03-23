function solution(dartResult) {
  const pattern = /([0-9]+)([STD])([*#]?)/g;
  const scores = dartResult.match(pattern);

  const BONUS = { S: 1, D: 2, T: 3 };
  const BONUSES = Object.keys(BONUS);
  const OPTION = { '*': 2, '#': -1 };
  const OPTIONS = Object.keys(OPTION);

  const totalScore = [];

  scores.forEach((result) => {
    const individual = result.split('');
    const divider = individual[individual.length - 1];
    let getScore = 0;

    if (BONUSES.includes(divider)) {
      const score = parseInt(individual.slice(0, -1).join(''));
      getScore = Math.pow(score, BONUS[divider]);
    }
    if (OPTIONS.includes(divider)) {
      if (divider === '*') totalScore[totalScore.length - 1] *= 2;
      const bonus = individual[individual.length - 2];
      const score = parseInt(individual.slice(0, -2).join(''));
      getScore = OPTION[divider] * Math.pow(score, BONUS[bonus]);
    }
    totalScore.push(getScore);
  });
  return totalScore.reduce((acc, num) => acc + num, 0);
}

// 37
console.log(solution('1S2D*3T'));
// 9
console.log(solution('1D2S#10S'));
// 3
console.log(solution('1D2S0T'));
// 23
console.log(solution('1S*2T*3S'));
// 5
console.log(solution('1D#2S*3S	'));
// -4
console.log(solution('1T2D3D#'));
// 59
console.log(solution('1D2S3T*'));
