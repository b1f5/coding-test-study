function solution(ingredient) {
  var answer = 0;
  let cnt = 0;
  let temp = find(ingredient, cnt);
  return answer;
}

function find(arr, cnt) {
  for (let i = 0; i < arr.length; i++) {
    // prettier-ignore
    if (arr[i] === 1 && arr[i + 1] === 2 && arr[i + 2] === 3 && arr[i + 3] === 1) {
      arr.splice(i, 4);
      cnt++;
      break; // 배열이 재정비 되니까 탐색인덱스를 초기화 시켜주기
    }
  }
  find(arr, cnt); // 어떻게 종료조건을 걸어줄지를 몰라서 고민을 15분가량하다가 fail
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
