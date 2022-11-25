function solution(dartResult) {
  let answer = 0;
  let [prevScore, score] = [0, 0];

  for (let i = 0; i < dartResult.length; i += 1) {
    let dart = dartResult[i];

    if ('0' <= dart && dart <= '9') {
      prevScore = score;
      // 점수가 10점일때
      if (dartResult[i + 1] === '0') {
        score = 10;
        i += 1;
      } else score = parseInt(dart);
    } else if (dart === 'S' || 'D' || 'T') {
      // 'S'는 생략 가능
      if (dart === 'S') score = score ** 1;
      else if (dart === 'D') score = score ** 2;
      else if (dart === 'T') score = score ** 3;

      if (dartResult[i + 1] === '*') {
        // 이미 answer에 더해져있기 때문에 한번만 더함
        answer += prevScore;
        score *= 2;
        i += 1;
      } else if (dartResult[i + 1] === '#') {
        score *= -1;
        i += 1;
      }

      answer += score;
    }
  }

  return answer;
}
