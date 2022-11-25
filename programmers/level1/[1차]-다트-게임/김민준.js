function solution(dartResult) {
  const BONUS = { S: 1, D: 2, T: 3 };
  const OPTION = { '#': -1, '*': 2 };
  let [prevScore, score] = [0, 0];
  let answer = 0;

  for (let i = 0; i < dartResult.length; i += 1) {
    const DART = dartResult[i];

    if ('0' <= DART && DART <= '9') {
      prevScore = score;
      // 점수가 10점일때
      if (dartResult[i + 1] === '0') {
        score = 10;
        i += 1;
      } 
      else score = parseInt(DART);
    } 
    
    // bonus
    else if (DART === 'S' || DART === 'D' || DART === 'T') {
      score = score ** BONUS[DART];

      // option
      if(dartResult[i + 1] === '*' || dartResult[i + 1] === '#') {
        if (dartResult[i + 1] === '*') {
          // 이미 answer에 더해져있기 때문에 한번만 더함
          answer += prevScore;
        }
        score *= OPTION[dartResult[i + 1]];
        i += 1;
      }

      answer += score;
    }
  }

  return answer;
}
