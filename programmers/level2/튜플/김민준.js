/**
 * 문자열을 받아 배열로 변환해주는 함수
 *
 * @param {string} s
 * @returns {string[][]}
 */
 function stringToArray(s) {
  let result = [];

  s = s.split('}');
  for (let i = 0; i < s.length; i += 1) {
    let current = s[i];
    let tmpArr = [];

    let tmpStr = '';
    for (let j = 0; j < current.length; j += 1) {
      // ',' 라면 그 전까지 tmpStr에 저장한 문자열이 있을경우에
      // tmpArr에 push하고 빈문자열로 바꿔줌
      if (current[j] === ',') {
        if (tmpStr.length > 0) tmpArr.push(tmpStr);
        tmpStr = '';
      }
      // 숫자가 아닐경우, 즉 문자일 경우에는 continue
      if (isNaN(current[j])) continue;
      // 숫자일 경우에는 tmpStr에 더해줌
      else tmpStr += current[j];
    }

    // 반복문이 끝나서 미처 push하지 못한 문자열이 있을경우 tmpStr에 push
    if (tmpStr.length > 0) tmpArr.push(tmpStr);
    result.push(tmpArr);
  }

  // 저장된 배열의 길이 순서대로 오름차순 정렬
  result.sort((a, b) => a.length - b.length);
  return result;
}

/**
 * 배열을 받아 문제에서 요구하는 tuple로 만들어 반환하는 함수
 *
 * @param {string[][]} arr
 * @returns {number[][]}
 */
function arrayToTuple(arr) {
  // 중복제거를 위해 set 선언
  let set = new Set();

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      set.add(parseInt(arr[i][j]));
    }
  }

  // 전개구문 사용시에 원소가 하나 있을시에는 원하는 값이 나오지 않음
  // 예를 들어 {{123}}일 경우에는 new Set(...[123]) 하면,
  // new Set(123)이 되기 때문에 null값을 123개 가진 set이 만들어짐
  // 따라서 직접 순회하면서 넣어주었음
  let tuple = [];
  set.forEach((el) => {
    tuple.push(el);
  });

  return tuple;
}

function solution(s) {
  let arr = stringToArray(s);
  let tuple = arrayToTuple(arr);

  return tuple;
}
