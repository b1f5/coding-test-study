function solution(num, total) {
  var answer = [];
  const middle = Math.floor(total / num);
  const rest = total % num;
  const temp = [];
  const exceptMiddle = Math.floor(num / 2);
  if (total === 0) {
    temp.push(0);
    for (let i = 1; i <= exceptMiddle; i++) {
      temp.push(-i, i);
    }
    console.log(temp);
  } else if (num % 2 === 1) {
    temp.push(middle);
    for (let i = 1; i <= exceptMiddle; i++) {
      temp.push(middle - i, middle + i);
    }
  } else if (num % 2 === 0) {
    temp.push(middle);
    for (let i = 1; i < exceptMiddle; i++) {
      temp.push(middle - i, middle + i);
    }
    const remained = total - temp.reduce((a, b) => a + b);
    temp.push(remained);
  }

  temp.sort((a, b) => a - b);
  answer.push(...temp);
  return answer;
}
