// @ts-check
/**
 * @param {number} bridge_length 다리에 올라갈 수 있는 트럭 수
 * @param {number} weight 다리가 견딜 수 있는 무게
 * @param {number[]} truck_weights 트럭 별 무게
 * @returns {number} 모든 트럭이 다리를 건너는데 걸리는 시간
 */
function solution(bridge_length, weight, truck_weights) {
  // 현재 시간을 0으로 초기화한다.
  let currentTime = 0;
  // 다리에 올라가있는 트럭들의 총무게를 0으로 초기화한다.
  let totalWeight = 0;
  // [트럭의 무게, 다리에 진입한 시간]을 기록하는 이중배열을 만든다.
  const crossingTrucks = [];

  while (true) {
    // 대기 중인 트럭이 없고, 트럭들이 전부 건넜으면 종료한다.
    if (truck_weights.length === 0 && crossingTrucks.length === 0) break;

    // 시간 1초 추가한다.
    currentTime += 1;

    // 선두 트럭의 진입 시간을 구한다.
    const leadingTruckEntryTime = crossingTrucks.length
      ? crossingTrucks[0][1]
      : undefined;
    // 현재 시간과 비교해서 선두 트럭의 진입시간이 bridge_length 초가 됐으면,
    if (
      leadingTruckEntryTime &&
      leadingTruckEntryTime === currentTime - bridge_length
    ) {
      // 선두 트럭은 다리를 건넜으므로 제거하고, 그 트럭의 무게를 현재 총무게에서 뺀다.
      const [crossedTruckWeight, _] = crossingTrucks.shift();
      totalWeight -= crossedTruckWeight;
    }

    // 다리를 건너는 중인 트럭들의 총 무게가 한계 하중 이하이고,
    // 다리에 다음 트럭이 올라갈 자리가 남아있다면 트럭을 진입시킨다.
    const nextTruck = truck_weights[0];
    if (
      totalWeight + nextTruck <= weight &&
      crossingTrucks.length < bridge_length
    ) {
      // truck_weights에서 트럭을 하나 빼서
      truck_weights.shift();
      // 트럭의 무게와 다리에 진입한 시간을 배열로 기록한다.
      crossingTrucks.push([nextTruck, currentTime]);
      // 진입한 트럭의 무게를 총무게에 더한다.
      totalWeight += nextTruck;
    }
  }

  return currentTime;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
