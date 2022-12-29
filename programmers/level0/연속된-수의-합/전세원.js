//num -> 연속되는 숫자의 갯수
//total -> 연속하는 숫자들을 다 합한 수.
function solution(num, total) {
  var answer = [];
  //기준점이 되는 중간숫자를 구한다.
  const middle = Math.floor(total / num);
  //연속하는 숫자의 위치를 구한다.
  const rest = total % num;
  const temp = [];
  //중간숫자부터 -i와 +i를 사용해 더해주기 위해 중간숫자를 뺀 갯수를 구한다.
  //여기서 짝수이면 exceptMiddle 미만으로 for문을 반복시키고, 홀수면 exceptMiddle 이하로 for문을 반복시킨다.
  const exceptMiddle = Math.floor(num / 2);
  //total이 0일때는 무조건 앞뒤로 -i +i를 해줘야함
  if (total === 0) {
    temp.push(0);
    for (let i = 1; i <= exceptMiddle; i++) {
      temp.push(-i, i);
    }
    console.log(temp);
    //홀수일 경우
  } else if (num % 2 === 1) {
    temp.push(middle);
    for (let i = 1; i <= exceptMiddle; i++) {
      temp.push(middle - i, middle + i);
    }
    //짝수일 경우
  } else if (num % 2 === 0) {
    temp.push(middle);
    for (let i = 1; i < exceptMiddle; i++) {
      temp.push(middle - i, middle + i);
    }
    //짝수일 경우 중간숫자와 반복문을 통해 구한 숫자들을 제외한 하나의 숫자를 계산으로 구한다. [1,2,3,4] -> 2가 중간숫자, 1,3이 반복문으로 넣은 숫자 4가 remained
    const lastNumber = total - temp.reduce((a, b) => a + b);
    temp.push(lastNumber);
  }
  //answer에 넣기전 sort를 통해 정렬
  temp.sort((a, b) => a - b);
  answer.push(...temp);
  return answer;
}
