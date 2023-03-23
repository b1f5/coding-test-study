// bridge_length: 다리에 올라갈 수 있는 최대 트럭의 개수
// weight: 다리가 견딜 수 있는 무게
// truck_weights: 트럭 별 무게
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  // 다리 상황
  let bridge = Array.from({ length: bridge_length }, () => 0);
  let sum = 0;
  let nextTruckWeight = truck_weights.shift();
  
  answer += 1;
  // 다리에 올라간 트럭 무게 합
  sum = nextTruckWeight;
  // 새로운 트럭을 다리에 올림
  bridge.push(nextTruckWeight);
  // 맨 앞 빼줌
  bridge.shift();

  while(sum) {
      answer += 1;
      
      sum -= bridge.shift();
      
      if(sum + truck_weights[0] <= weight) {
          nextTruckWeight = truck_weights.shift();
          sum += nextTruckWeight;
          bridge.push(nextTruckWeight);
      }
      else bridge.push(0);
  }
  
  return answer;
}