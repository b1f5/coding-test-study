function solution(survey, choices) {
  const scoreBoard = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  const addScores = { 1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3 };
  const surveyArray = [];
  for (let i = 0; i < survey.length; i++) {
    surveyArray.push([survey[i], choices[i]]);
  }
  surveyArray.forEach((el) => {
    const [first, second] = el[0].split('');
    if (el[1] < 4) {
      scoreBoard[first] += addScores[el[1]];
    } else if (el[1] > 4) {
      scoreBoard[second] += addScores[el[1]];
    }
  });

  const firstType = [];
  const secondType = [];
  Object.entries(scoreBoard).forEach((value, index) => {
    if (index === 0 || index % 2 === 0) {
      firstType.push(value);
    } else {
      secondType.push(value);
    }
  });

  const surveyResult = [];
  for (let i = 0; i < firstType.length; i++) {
    let compare = [firstType[i][1], secondType[i][1]];
    if (compare[0] >= compare[1]) {
      surveyResult.push(firstType[i][0]);
    } else {
      surveyResult.push(secondType[i][0]);
    }
  }
  return surveyResult.join('');
}

// expected result : "TCMA"
console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));

// expected result : "RCJA"
console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3]));
