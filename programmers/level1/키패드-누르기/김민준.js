function solution(numbers, hand) {
  let answer = '';

  let prevLeftNum = 10; // *
  let prevRightNum = 12; // #

  for (let n of numbers) {
    if (n === 1 || n === 4 || n === 7) {
      answer += 'L';
      prevLeftNum = n;
    } 
    else if (n === 3 || n === 6 || n === 9) {
      answer += 'R';
      prevRightNum = n;
    } 
    else {
      if (n === 0) n = 11;
      // 거리계산 = 행거리 + 열거리 (맨해튼 거리)
      let fromLeftHand =
        (Math.abs(n - prevLeftNum) % 3) + Math.abs(n - prevLeftNum) / 3;
      let fromRightHand =
        (Math.abs(n - prevRightNum) % 3) + Math.abs(n - prevRightNum) / 3;

      fromLeftHand = Math.floor(fromLeftHand);
      fromRightHand = Math.floor(fromRightHand);

      // 왼손에서의 거리가 오른손에서의 거리보다 크다면,
      if (fromLeftHand > fromRightHand) {
        answer += 'R';
        prevRightNum = n;
      }
      // 거리가 같으면 주사용 손으로,
      if (fromLeftHand === fromRightHand) {
        const myHand = hand[0].toUpperCase();

        if (myHand === 'L') prevLeftNum = n;
        if (myHand === 'R') prevRightNum = n;

        answer += myHand;
      }
      // 오른손의 거리가 왼손에서의 거리보다 크다면,
      if (fromLeftHand < fromRightHand) {
        answer += 'L';
        prevLeftNum = n;
      }
    }
  }

  return answer;
}
