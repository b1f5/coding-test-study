const pobi = [131, 132];
const crong = [211, 212];

function solution(pobi, crong) {
  let answer = "";
  let finalCal = [];
  finalCal.push(cal(pobi), cal(crong));
  if (finalCal[0].includes(0) || finalCal[1].includes(0)) {
    answer = -1;
  } else if (finalCal[0] > finalCal[1]) {
    answer = 1;
  } else if (finalCal[0] < finalCal[1]) {
    answer = 2;
  } else {
    answer = 0;
  }
  return answer;
}

function cal(openPage) {
  let maxNum = [];
  if (openPage[0] + 1 !== openPage[1]) {
    maxNum.push(0);
    return maxNum;
  } else {
    let bothPageMax = []; //각 페이지에서 더한값과 곱한 값 중에 큰 값이 들어간다.
    for (page of openPage) {
      //왼쪽 오른쪾 순회 돌면서 계산.
      let pageCal = []; // 각 페이지의 더한 값과 곱한 값이 들어간다.
      let splitPage = String(page).split("");
      let plusPage = plus(splitPage);
      let multiplePage = multiple(splitPage);
      pageCal.push(plusPage, multiplePage);
      bothPageMax.push(Math.max(...pageCal));
    }
    maxNum.push(Math.max(...bothPageMax));
    return maxNum;
  }
}

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
