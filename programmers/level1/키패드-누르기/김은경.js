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
  const result = [];
  let currentRightHand = '#';
  let currentLeftHand = '*';
  numbers.forEach((number) => {
    if (/[147]/.test(number)) {
      currentLeftHand = number;
      result.push('L');
    } else if (/[369]/.test(number)) {
      currentRightHand = number;
      result.push('R');
    } else {
      const rightFirst = Math.abs(keypad[number][0] - keypad[currentRightHand][0]);
      const rightSecond = Math.abs(keypad[number][1] - keypad[currentRightHand][1]);
      const distanceRight = rightFirst + rightSecond;

      const leftFirst = Math.abs(keypad[number][0] - keypad[currentLeftHand][0]);
      const leftSecond = Math.abs(keypad[number][1] - keypad[currentLeftHand][1]);
      const distanceLeft = leftFirst + leftSecond;

      if (distanceRight === distanceLeft) {
        if (hand === 'right') {
          currentRightHand = number;
          result.push('R');
        } else {
          currentLeftHand = number;
          result.push('L');
        }
      } else {
        if (distanceRight < distanceLeft) {
          currentRightHand = number;
          result.push('R');
        } else {
          currentLeftHand = number;
          result.push('L');
        }
      }
    }
  });
  return result.join('');
}

// expected result : LRLLLRLLRRL
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));

// expected result : LRLLRRLLLRR
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));

// expected result : LLRLLRLLRL
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
