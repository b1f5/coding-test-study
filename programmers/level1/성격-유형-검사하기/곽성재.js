function solution(survey, choices) {
  const scoreBoard = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  let origin = "RTCFJMAN";
  let result = "";
  for (let i = 0; i < survey.length; i++) {
    const choice = choices[i];
    if (choice < 4) {
      const type = survey[i][0];
      scoreBoard[type] += 4 - choice;
    } else if (choice > 4) {
      const type = survey[i][1];
      scoreBoard[type] += choice - 4;
    }
  }
  for (let i = 0; i < origin.length; i += 2) {
    const typePrev = origin[i];
    const typeNext = origin[i + 1];
    if (scoreBoard[typePrev] >= scoreBoard[typeNext]) {
      result += typePrev;
    } else if (scoreBoard[typePrev] < scoreBoard[typeNext]) {
      result += typeNext;
    }
  }
  return result;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
