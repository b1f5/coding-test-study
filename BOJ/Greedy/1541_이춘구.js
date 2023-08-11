const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// - 연산자 뒤에 오는 숫자를 최대한 크게 만들기
// 55 - (50 + 40) - (10) - (20)
// -부터 다음 -까지 괄호로 묶기
// 괄호 안의 + 연산을 전부 마치고 - 연산하기
// eval('055') => 45이므로 eval 사용 ㄴㄴ

console.log(
  input
    .split("-")
    .map((v) =>
      v.split("+").reduce((acc, curr) => Number(acc) + Number(curr), 0)
    )
    .reduce((acc, curr) => acc - curr)
);
