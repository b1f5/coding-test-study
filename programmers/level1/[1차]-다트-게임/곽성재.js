function solution(dartResult) {
  var answer = 0;
  const temp = [];
  // prettier-ignore
  const BONUS = { S: 1, D: 2, T: 3 };

  for (let i = 0; i < dartResult.length; i++) {
    // 만약 [S, D, T]가 -를 포함한다면
    if (Object.keys(BONUS).includes(dartResult[i])) {
      // S D T
      const bonus = dartResult[i];
      // 점수가 10인 경우
      if (dartResult[i - 2] === "1") {
        temp.push(Math.pow(10, BONUS[bonus]));
      } else {
        temp.push(Math.pow(Number(dartResult[i - 1]), BONUS[bonus]));
      }
    }
  }

  // 옵션이 될 수 있는 인덱스 값을 나열해보자
  // 첫번째 기회의 옵션 => 무조건 인덱스 2
  // 두번째 기회의 옵션 => 인덱스 4(첫번째가 있을때) 또는 인덱스 5(첫번째가 없을때)
  // 세번째 기회의 옵션 => 인덱스 6(앞서서 하나도 없을때) 또는 인덱스 7(앞서서 하나 있을때) 또는 인덱스 8(앞서서 둘다 있을때)
  // Map
  const RANGE = {
    2: 0,
    4: 1,
    5: 1,
    6: 2,
    7: 2,
    8: 2,
  };
  const OPTION = { "#": -1, "*": 2 };
  for (let i = 0; i < dartResult.length; i++) {
    const option = dartResult[i];
    if (option === "#") {
      temp[RANGE[i]] = -temp[RANGE[i]];
    } else if (option === "*") {
      if (RANGE[i] === 0) {
        temp[RANGE[i]] = 2 * temp[RANGE[i]];
      } else if (RANGE[i] !== 0) {
        temp[RANGE[i] - 1] = 2 * temp[RANGE[i] - 1];
        temp[RANGE[i]] = 2 * temp[RANGE[i]];
      }
    }
  }
  return temp.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
console.log(solution("1D#2S*3S"));
console.log(solution("1T2D3D#"));
console.log(solution("1D2S3T*"));
