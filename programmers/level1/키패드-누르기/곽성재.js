function solution(numbers, hand) {
  const answer = [];
  let positionLeft = "*";
  let positionRight = "#";
  numbers.forEach((num) => {
    switch (num) {
      case 2:
      case 5:
      case 8:
      case 0:
        const destinationCoord = findCoord(num);
        const leftCoord = findCoord(positionLeft);
        const rightCoord = findCoord(positionRight);
        const leftDist = calcDist(destinationCoord, leftCoord);
        const rightDist = calcDist(destinationCoord, rightCoord);
        if (leftDist > rightDist) {
          answer.push("R");
          positionRight = num;
        } else if (leftDist < rightDist) {
          answer.push("L");
          positionLeft = num;
        } else if (leftDist === rightDist) {
          if (hand === "right") {
            answer.push("R");
            positionRight = num;
          } else {
            answer.push("L");
            positionLeft = num;
          }
        }
        break;

      case 1:
      case 4:
      case 7:
        answer.push(FIXED_KEY[num]);
        positionLeft = num;
        break;

      case 3:
      case 6:
      case 9:
        answer.push(FIXED_KEY[num]);
        positionRight = num;
        break;
    }
  });

  return answer.join("");
}

// prettier-ignore
const FIXED_KEY = { 1: "L", 4: "L", 7: "L", 3: "R", 6: "R", 9: "R" };
const KEYPAD = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["*", 0, "#"],
];

const HAND_BOARD = {
  right: "R",
  left: "L",
};

const findCoord = (target) => {
  const targetCoord = [0, 0];
  KEYPAD.forEach((row, idx) => {
    if (row.includes(target)) {
      targetCoord[0] = idx;
      return;
    }
  });
  targetCoord[1] = KEYPAD[targetCoord[0]].indexOf(target);
  return targetCoord;
};

const calcDist = (arr1, arr2) => {
  return Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
};
