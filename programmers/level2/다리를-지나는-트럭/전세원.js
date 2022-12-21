function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const passing_bridge = new Array(bridge_length).fill(0);
  const passed_bridge = [];
  let count = 0;
  const init = 0;
  let weight_passing = () => passing_bridge.reduce((a, b) => a + b, init);
  passing_bridge[bridge_length - 1] = truck_weights.shift();
  while (truck_weights.length > 0) {
    if (weight < weight_passing() + Number(truck_weights.slice(0, 1))) {
      passed_bridge.push(passing_bridge.shift());
      if (weight < weight_passing() + Number(truck_weights.slice(0, 1))) {
        passing_bridge.push(0);
      } else {
        passing_bridge.push(truck_weights.shift());
      }
    } else {
      passing_bridge.push(truck_weights.shift());
      passed_bridge.push(passing_bridge.shift());
    }
  }

  if (passing_bridge.length > 0) {
    passed_bridge.push(...passing_bridge);
  }

  answer = passed_bridge.length + 1;
  return answer;
}
