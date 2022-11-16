function solution(numbers, hand) {
  let answer = "";
  const FIXED_KEY = { 1: "L", 4: "L", 7: "L", 3: "R", 6: "R", 9: "R" };
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
          answer += "R";
          positionRight = num;
        } else if (leftDist < rightDist) {
          answer += "L";
          positionLeft = num;
        } else if (leftDist === rightDist) {
          if (hand === "right") {
            answer += "R";
            positionRight = num;
          } else {
            answer += "L";
            positionLeft = num;
          }
        }
        break;

      case 1:
      case 4:
      case 7:
        answer += "L";
        positionLeft = num;
        break;

      case 3:
      case 6:
      case 9:
        answer += "R";
        positionRight = num;
        break;
    }
  });

  return answer;
}

const findCoord = (target) => {
  let targetCoord = [0, 0];
  const KEYPAD = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  for (let i = 0; i < KEYPAD.length; i++) {
    for (let j = 0; j < KEYPAD[0].length; j++) {
      if (KEYPAD[i][j] === target) {
        targetCoord = [i, j];
        break;
      }
    }
  }

  return targetCoord;
};

const calcDist = (arr1, arr2) => {
  return Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
};
