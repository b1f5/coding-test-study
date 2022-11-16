//prettier-ignore
function solution(numbers, hand) {
  const keypad = {
    1: [0, 0],
    4: [0, 1],
    7: [0, 2],
    '*': [0, 3],
    2: [1, 0],
    5: [1, 1],
    8: [1, 2],
    0: [1, 3],
    3: [2, 0],
    6: [2, 1],
    9: [2, 2],
    '#': [2, 3],
  };
  const typedByLeftFinger = "L"
  const typedByRightFinger = "R"
  let currentRightHand = '#';
  let currentLeftHand = '*';
  let result = "";
  numbers.forEach((number) => {
    if (/[147]/.test(number)) {
      currentLeftHand = number;
      result += typedByLeftFinger;
    } else if (/[369]/.test(number)) {
      currentRightHand = number;
      result += typedByRightFinger;
    } else {
      const distanceRight = getDistance(keypad, number, currentRightHand)
      const distanceLeft = getDistance(keypad, number, currentLeftHand)
      if (distanceRight === distanceLeft) {
        if (hand === 'right') {
          currentRightHand = number;
          result += typedByRightFinger;
        } else {
          currentLeftHand = number;
          result += typedByLeftFinger;
        }
      } else {
        if (distanceRight < distanceLeft) {
          currentRightHand = number;
          result += typedByRightFinger;
        } else {
          currentLeftHand = number;
          result += typedByLeftFinger;
        }
      }
    }
  });
  return result;
}

//prettier-ignore
function getDistance(keypad, number, currentHand) {
  const horizontalMovement = Math.abs(keypad[number][0] - keypad[currentHand][0]);
  const verticalMovement = Math.abs(keypad[number][1] - keypad[currentHand][1]);
  return horizontalMovement + verticalMovement;
}

// expected result : LRLLLRLLRRL
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));

// expected result : LRLLRRLLLRR
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));

// expected result : LLRLLRLLRL
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
