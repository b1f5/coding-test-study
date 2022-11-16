function solution(numbers, hand) {
  let curLeft = 10;
  let curRight = 12;

  return numbers
    .map((num) => {
      if (num === 0) num = 11;

      if (num % 3 === 0) {
        return setPosition(num, 'R');
      } else if (num % 3 === 1) {
        return setPosition(num, 'L');
      } else {
        const targetLocation = keyPadLocation(num);
        const distanceWithLeft = distanceBtwLocation(
          keyPadLocation(curLeft),
          targetLocation
        );
        const distanceWithRight = distanceBtwLocation(
          keyPadLocation(curRight),
          targetLocation
        );

        return distanceWithLeft === distanceWithRight
          ? mainHandFirst(num, hand)
          : distanceWithLeft > distanceWithRight
          ? setPosition(num, 'R')
          : setPosition(num, 'L');
      }
    })
    .join('');

  function setPosition(num, role) {
    if (role === 'L') {
      curLeft = num;
    } else {
      curRight = num;
    }
    return role;
  }

  function mainHandFirst(num, main) {
    return main === 'left' ? setPosition(num, 'L') : setPosition(num, 'R');
  }
}

function keyPadLocation(num) {
  return [Math.floor((num - 1) / 3), (num - 1) % 3];
}

function distanceBtwLocation(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
