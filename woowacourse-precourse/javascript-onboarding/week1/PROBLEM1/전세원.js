const pobi = [97, 98];
const crong = [197, 198];

function solution(pobi, crong) {
  let answer = [];
  let finalCal = [];
  finalCal.push(cal(pobi), cal(crong));
  console.log(finalCal);
  if (finalCal[0].includes(0) || finalCal[1].includes(0)) {
    answer.push(-1);
  } else if (finalCal[0] > finalCal[1]) {
    answer.push(1);
  } else if (finalCal[0] < finalCal[1]) {
    answer.push(2);
  } else answer.push(0);
  return answer;
}

function cal(a) {
  let maxNum = [];
  if (a[0] + 1 !== a[1]) {
    maxNum.push(0);
    return maxNum;
  } else {
    let bothPageMax = []; //각 페이지에서 더한값과 곱한 값 중에 큰 값이 들어간다.
    for (e of a) {
      //왼쪽 오른쪾 순회 돌면서 계산.
      let pageCal = []; // 각 페이지의 더한 값과 곱한 값이 들어간다.
      let splitPage = String(e).split(""); // ['9', '6'] ['9', '7']
      let plusPage = plus(splitPage); //15 16
      let multiplePage = multiple(splitPage); // 54 63
      pageCal.push(plusPage, multiplePage); // 15, 54  :: 16 63
      console.log(`더한값, 곱한값 ${pageCal}`);
      bothPageMax.push(Math.max(...pageCal)); // 54 , 63
      console.log(`각 페이지의 최댓값${bothPageMax}`);
    }
    maxNum.push(Math.max(...bothPageMax)); // 63
    console.log(`한 인물의 최댓값${maxNum}`);
    return maxNum;
  }
}

// console.log(cal(pobi));

//합하는 함수
function plus(array) {
  let result = 0; // 각 자릿수를 합한 페이지의 결과
  for (let i = 0; i < array.length; i++) {
    result += parseInt(array[i], 10);
  }
  return result;
}
//곱하는 함수
function multiple(array) {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result *= parseInt(array[i], 10);
  }
  return result;
}

console.log(solution(pobi, crong));
