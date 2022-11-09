function solution(survey, choices) {
  // prettier-ignore
  // 모든 성격유형을 풀어서 0점으로 초기화
  const scoreBoard = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  // 의도적으로 알파벳순서가 아니게 담아줌
  const TYPE_PAIR = ["TR", "CF", "JM", "NA"];

  // 여기에 유저의 성격유형을 하나씩 더해줄예정
  let result = "";

  for (let i = 0; i < survey.length; i++) {
    // 유저가 선택한 선택을 미리 선언
    const choice = choices[i];
    // 4를 기준으로 동일하게 떨어져 있으므로, 점수처리를 17줄과 같이 해준다
    const score = Math.abs(choice - 4);
    if (choice < 4) {
      const disagree = survey[i][0];
      scoreBoard[disagree] += score;
    } else if (choice > 4) {
      const agree = survey[i][1];
      scoreBoard[agree] += score;
    }
  }
  for (const pair of TYPE_PAIR) {
    const typeOne = pair[0];
    const typeAnother = pair[1];
    if (scoreBoard[typeOne] > scoreBoard[typeAnother]) {
      result += typeOne;
    } else if (scoreBoard[typeOne] < scoreBoard[typeAnother]) {
      result += typeAnother;
    } else {
      // 명확하게 알파벳순서로 넣어주기
      result += typeOne < typeAnother ? typeOne : typeAnother;
    }
  }

  return result;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
