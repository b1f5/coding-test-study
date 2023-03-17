function solution(arr) {
  let cntOfFirst = 1;
  let cntOfAnother = 0;
  let strOfFirst = arr[0];
  let answer = 0;
  for (let i = 1; i < arr.length; i++) {
    const str = arr[i];
    if (cntOfFirst === cntOfAnother) {
      cntOfAnother = 0;
      cntOfFirst = 0;
      strOfFirst = str;
      answer++;
    }
    if (str === strOfFirst) cntOfFirst++;
    if (str !== strOfFirst) cntOfAnother++;
  }
  return answer;
}
