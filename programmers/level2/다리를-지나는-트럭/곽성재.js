function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  const complete = []; // 건너기 완료한 트럭
  const progress = []; // 건너는 중인 트럭
  const wait = [...truck_weights]; // 대기중인 트럭

  let sum = 0; // 다리위의 트럭 무게의 합

  // 완료한 트럭이 전부들어올때까지 반복 돌리기
  while (complete.length !== truck_weights.length) {
    // 다리위의 트럭 무게의 합과 대기중인 트럭의 첫번째 무게의 합이 weight보다 적으면
    if (sum + wait[0] <= weight && progress.length < bridge_length) {
      // 대기 트럭한대를 빼기
      const pickup = wait.shift();
      // 건너는중인 트럭에다가 푸쉬
      progress.push([pickup, answer + bridge_length]); // answer + bridge_length === 다리를 빠져나갈 시점의 시간
      // 트럭무게의 합에다가 픽업을 더해줌
      sum += pickup;
      // 진입시키면서 시간 증가시키기
      answer += 1;
    } else {
      // weight보다 큰 케이스는 이제 progress에서 빼줘야함
      const [completeTruck, completeTime] = progress.shift();
      // answer = completeTime;
      if (answer < completeTime) {
        // 다리에 트럭이 들어갈때만 초가 증가하기 때문에 계속 들어간다면 이전에 들어갔던 트럭의 나갈 시간보다 커질 경우가 생겨서 조건문이 필요. (testcase 4,5,6,9)
        answer = completeTime;
        // 앞에 트럭이 나갈 떄 까지 못 들어가기 때문에 나간 트럭의 초로 변경.
      }
      complete.push(completeTruck);
      sum -= completeTruck;
    }
  }

  // 마지막 차량 빼는 시간 1 더하기
  return answer + 1;
}
