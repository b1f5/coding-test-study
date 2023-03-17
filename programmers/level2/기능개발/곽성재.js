function solution(progresses, speeds) {
  var answer = [];
  const endTiming = progresses.length;
  while (true) {
    // 배포할 카운트
    let cnt = 0;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] = progresses[i] + speeds[i];
    }
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt++;
    }
    // for (let j = 0; j < progresses.length; ) {
    //   if (progresses[j] >= 100) {
    //     progresses.shift();
    //     speeds.shift();
    //     cnt++;
    //   } else {
    //     break;
    //   }
    // }
    // 조건이 없으면 0도 푸쉬됨
    if (cnt !== 0) answer.push(cnt);
    // 앤서의 길이가 0보다 크고, 다 합했더니 배포할걸 다하면 브레이크
    // prettier-ignore
    if (answer.length > 0 && answer.reduce((acc, cur) => acc + cur) === endTiming) break;
  }
  return answer;
}

// prettier-ignore
console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
