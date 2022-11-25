function solution(dartResult) {
  var answer = 0;
  const temp = [];
  // prettier-ignore
  const BONUS = { S: 1, D: 2, T: 3 };

  for (let i = 0; i < dartResult.length; i++) {
    if (Object.keys(BONUS).includes(dartResult[i])) {
      const bonus = dartResult[i];
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
  for (let i = 0; i < dartResult.length; i++) {
    const option = dartResult[i];
    if (option === "#") {
      switch (i) {
        case 2:
          temp[0] = -temp[0];
          break;
        case 4:
        case 5:
          temp[1] = -temp[1];
          break;
        case 6:
        case 7:
        case 8:
          temp[2] = -temp[2];
          break;
      }
    } else if (option === "*") {
      switch (i) {
        case 2:
          temp[0] = 2 * temp[0];
          break;
        case 4:
        case 5:
          temp[0] = 2 * temp[0];
          temp[1] = 2 * temp[1];
          break;
        case 6:
        case 7:
        case 8:
          temp[1] = 2 * temp[1];
          temp[2] = 2 * temp[2];
          break;
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

/**
테스트 1 〉	통과 (0.13ms, 33.4MB)
테스트 2 〉	통과 (0.12ms, 33.5MB)
테스트 3 〉	통과 (0.13ms, 33.6MB)
테스트 4 〉	통과 (0.12ms, 33.5MB)
테스트 5 〉	통과 (0.12ms, 33.4MB)
테스트 6 〉	통과 (0.13ms, 33.4MB)
테스트 7 〉	통과 (0.13ms, 33.4MB)
테스트 8 〉	통과 (0.13ms, 33.6MB)
테스트 9 〉	통과 (0.13ms, 33.4MB)
테스트 10 〉	통과 (0.14ms, 33.5MB)
테스트 11 〉	통과 (0.14ms, 33.5MB)
테스트 12 〉	통과 (0.12ms, 33.4MB)
테스트 13 〉	통과 (0.18ms, 33.5MB)
테스트 14 〉	통과 (0.14ms, 33.5MB)
테스트 15 〉	통과 (0.13ms, 33.4MB)
테스트 16 〉	통과 (0.13ms, 33.4MB)
테스트 17 〉	통과 (0.22ms, 33.6MB)
테스트 18 〉	통과 (0.17ms, 33.5MB)
테스트 19 〉	통과 (0.13ms, 33.5MB)
테스트 20 〉	통과 (0.14ms, 33.4MB)
테스트 21 〉	통과 (0.20ms, 33.2MB)
테스트 22 〉	통과 (0.18ms, 33.4MB)
테스트 23 〉	통과 (0.19ms, 33.5MB)
테스트 24 〉	통과 (0.18ms, 33.4MB)
테스트 25 〉	통과 (0.15ms, 33.5MB)
테스트 26 〉	통과 (0.21ms, 33.4MB)
테스트 27 〉	통과 (0.22ms, 33.4MB)
테스트 28 〉	통과 (0.13ms, 33.6MB)
테스트 29 〉	통과 (0.15ms, 33.4MB)
테스트 30 〉	통과 (0.13ms, 33.4MB)
테스트 31 〉	통과 (0.13ms, 33.5MB)
테스트 32 〉	통과 (0.15ms, 33.5MB)
 */
