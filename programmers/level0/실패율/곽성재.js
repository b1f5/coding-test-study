function solution(N, stages) {
  let answer = [];
  // 스테이지 별 도전자
  const challengerBoard = {};
  // 스테이지 별 실패율
  const failureBoard = {};
  let challengers = stages.length;
  for (let i = 1; i <= N; i++) {
    challengerBoard[i] = 0;
  }
  stages.forEach((v, i) => {
    if (v > N) return; // 마지막 스테이지를 깬사람은 알 필요가 없다
    challengerBoard[v] += 1;
  });
  for (const [stage, challeger] of Object.entries(challengerBoard)) {
    const failureRate = challeger / challengers;
    challengers -= challeger;
    failureBoard[stage] = failureRate;
    // answer은 [스테이지번호, 실패율]이 담긴 이중배열
    answer.push([+stage, failureRate]);
  }
  // console.log(failureBoard);
  // || 는 첫번째 truthy값을 찾는다
  // && 는 첫번째 falsy값을 찾는다
  // 만약 실패율이 같다면(===0) 스테이지를 기준으로 오름차순
  answer.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
  // console.log(answer);
  return answer.map((v) => v[0]);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
