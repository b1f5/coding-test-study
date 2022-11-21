// number : 기사단원의 수
// limit : 이웃나라와 협약으로 정해진 공격력의 제한 수치
// power : 제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수

function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    const powerOfTheKnight = getAliquot(i);
    if (powerOfTheKnight > limit) {
      answer = answer + power;
    } else {
      answer = answer + powerOfTheKnight;
    }
  }
  return answer;
}

// getAliquot : 기사의 공격력 구하는 함수
function getAliquot(num) {
  const aliquot = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      aliquot.push(i);
    }
  }
  const powerOfTheKnight = aliquot.length;
  return powerOfTheKnight;
}

// expected result : 10
console.log(solution(5, 3, 2));

// expected result : 21
// console.log(solution(10, 3, 2))
