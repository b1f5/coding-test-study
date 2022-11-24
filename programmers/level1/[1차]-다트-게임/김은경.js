function solution(dartResult) {
  const pattern = /[0-9]+[STD][*#]?/g;
  const array = dartResult.match(pattern);
  const score = [];

  array.forEach((el) => {
    const individual = el.split('');
    let divider = individual[individual.length - 1];
    if (divider === 'S' || divider === 'T' || divider === 'D') {
      const gottonNum = parseInt(individual.slice(0, -1).join(''));
      let getScore = 0;
      switch (divider) {
        case 'S':
          getScore = gottonNum;
          break;
        case 'D':
          getScore = Math.pow(gottonNum, 2);
          break;
        case 'T':
          getScore = Math.pow(gottonNum, 3);
          break;
      }
      score.push(getScore);
    }
    if (divider === '*') {
      score[score.length - 1] *= 2;
      let divider = individual[individual.length - 2];
      const gottonNum = parseInt(individual.slice(0, -2).join(''));
      let getScore = 0;
      switch (divider) {
        case 'S':
          getScore = 2 * gottonNum;
          break;
        case 'D':
          getScore = 2 * Math.pow(gottonNum, 2);
          break;
        case 'T':
          getScore = 2 * Math.pow(gottonNum, 3);
          break;
      }
      score.push(getScore);
    }
    if (divider === '#') {
      let divider = individual[individual.length - 2];
      const gottonNum = parseInt(individual.slice(0, -2).join(''));
      let getScore = 0;
      switch (divider) {
        case 'S':
          getScore = -1 * gottonNum;
          break;
        case 'D':
          getScore = -1 * Math.pow(gottonNum, 2);
          break;
        case 'T':
          getScore = -1 * Math.pow(gottonNum, 3);
          break;
      }
      score.push(getScore);
    }
  });

  return score.reduce((acc, num) => acc + num, 0);
}

// // 37
// console.log(solution('1S2D*3T'));
// // 9
// console.log(solution('1D2S#10S'));
// // 3
// console.log(solution('1D2S0T'));
// // 23
// console.log(solution('1S*2T*3S'));
// // 5
// console.log(solution('1D#2S*3S	'));
// // -4
// console.log(solution('1T2D3D#'));
// // 59
// console.log(solution('1D2S3T*'));
