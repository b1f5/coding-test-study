// @ts-check
/**
 * @param {number[]} numbers 순서대로 누를 번호가 담긴 배열
 * @param {string} hand 왼손잡이인 지 오른손잡이인 지를 나타내는 문자열
 * @returns 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열
 */
function solution(numbers, hand) {
  let answer = "";

  // 키패드의 좌우변에 위치한 번호와 눌러야 할 손가락을 기록한 객체
  const fingerKeyMap = { 1: "L", 3: "R", 4: "L", 6: "R", 7: "L", 9: "R" };
  // [1, 3, 4, 6, 7, 9]
  const sideKeys = Object.keys(fingerKeyMap);

  const handMap = {
    right: "R",
    left: "L",
  };

  /**
   * 왼 손가락과 오른 손가락의 위치를 기록하는 객체
   * @type { {L: string | number, R: string | number} }
   */
  const fingerLocation = { L: "*", R: "#" };

  // 눌러야 하는 번호를 하나씩 순회한다.
  for (const number of numbers) {
    // 이번에 눌러야 할 번호가 1, 3, 4, 6, 7, 9 중 하나라면
    if (sideKeys.includes(String(number))) {
      // 번호를 눌러야 하는 손가락이 어느쪽인지 구한다.
      const finger = fingerKeyMap[number];
      // 해당 손가락의 위치를 현재 번호로 기록한다.
      fingerLocation[finger] = number;
      // 답에 어느쪽 손가락인지 더한다.
      answer += finger;

      // 다음 번호로 넘어간다.
      continue;
    }

    // 눌러야 할 번호가 2, 5, 8, 0 중 하나라면,
    // 현재 왼손과 오른손 위치에서 현재 번호까지의 거리를 각각 구한다.
    const distanceFromLeft = calculateDistance(fingerLocation["L"], number);
    const distanceFromRight = calculateDistance(fingerLocation["R"], number);

    // 두 거리가 같다면
    if (distanceFromLeft === distanceFromRight) {
      // 주 사용 손가락의 위치를 현재 번호로 바꾸고
      fingerLocation[handMap[hand]] = number;
      // 답에 어느쪽 손가락인지 더한다.
      answer += handMap[hand];

      // 다음 번호로 넘어간다.
      continue;
    }

    // 두 거리가 같지 않다면 거리가 적은 쪽을 가까운 손가락으로 한다.
    const closestFinger = distanceFromLeft < distanceFromRight ? "L" : "R";
    // 가까운 쪽 손가락의 위치를 현재 번호로 바꾸고
    fingerLocation[closestFinger] = number;
    // 답에 어느쪽 손가락인지 더한다.
    answer += closestFinger;
  }

  // 답을 반환한다.
  return answer;
}

/**
 * 두 키 사이의 거리를 계산해 반환하는 함수
 * @param {number | string} from 시작 키
 * @param {number | string} to 목표 키
 * @returns 두 키 사이의 거리
 */
function calculateDistance(from, to) {
  // 시작 키와 목표 키의 좌표를 각각 구한다.
  const fromCoordinates = findCoordinates(from);
  const toCoordinates = findCoordinates(to);

  const distance = fromCoordinates.reduce(
    (currentDistance, fromCoordinate, index) => {
      // 두 좌표의 차의 절댓값(거리)을 구한다.
      const diff = Math.abs(fromCoordinate - toCoordinates[index]);
      // 현재까지의 거리에 더한다.
      return currentDistance + diff;
    },
    0
  );

  // 거리를 반환한다.
  return distance;
}

/**
 * 목표 키의 좌표를 찾아주는 함수
 * @param {number | string} target 목표 키
 * @returns {number[]} 목표 키의 좌표
 */
function findCoordinates(target) {
  // 키패드를 이차원 배열로 만들어 각 숫자에 좌표를 부여한다.
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  // 목표 키의 좌표를 초기화한다.
  let targetCoordinates = [0, 0];

  // 키패드의 너비와 높이를 구한다.
  const keypadWidth = keypad[0].length;
  const keypadHeight = keypad.length;

  // 키패드의 숫자를 하나씩 순회하며 목표 숫자와 일치하는 숫자를 찾으면 그 좌표를 할당하고 종료한다.
  outer: for (let i = 0; i < keypadHeight; i += 1) {
    for (let j = 0; j < keypadWidth; j += 1) {
      if (keypad[i][j] === target) {
        targetCoordinates = [i, j];

        break outer;
      }
    }
  }

  // 좌표를 반환한다.
  return targetCoordinates;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
