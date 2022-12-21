function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge_progress = Array.from({ length: bridge_length }, () => 0);
  let progress_sum = 0;

  // 시간증가
  time++;
  // 현재버티는무게더하기
  progress_sum += truck_weights[0];
  // 현재다리에서 맨앞에꺼빼기
  bridge_progress.shift();
  // 대기트럭에서 하나 빼서 넣어주기
  bridge_progress.push(truck_weights.shift());
  // 버티는무게가 0이 될때까지 반복을 돌린다
  while (progress_sum > 0) {
    // 시간을 더해주고
    time++;
    // 현재다리의 맨앞에 아이를 빼주고
    progress_sum -= bridge_progress.shift();
    // 맨 앞에껄 뺐더니 다음 트럭이 들어와도 버티는 하중이라면?
    if (progress_sum + truck_weights[0] <= weight) {
      progress_sum += truck_weights[0];
      bridge_progress.push(truck_weights.shift());
    } else {
      bridge_progress.push(0);
    }
  }
  return time;
}
