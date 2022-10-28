// 첫번째 풀이 : 객체 생성 후, 2중 for문 사용하여 카운트

function firstTry(number) {
  const game369 = { 3: 0, 6: 0, 9: 0 };
  for (let i = 1; i <= number; i++) {
    let numbers = String(i).split('');
    for (let e of numbers) {
      if (e in game369) game369[e] += 1;
    }
  }
  return Object.values(game369).reduce((sum, cur) => sum + cur, 0);
}

// 두번째 풀이 : 모든숫자를 배열에 담은 뒤 3,6,9의 갯수만 리턴

function problem3(number) {
  let numbers = [];
  for (let i = 1; i <= number; i++) {
    numbers.push(String(i).split(''));
  }
  const numberOfClaps = numbers
    .flat()
    .filter((e) => e === '3' || e === '6' || e === '9').length;

  return numberOfClaps;
}

module.exports = problem3;
