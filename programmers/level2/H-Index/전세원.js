function solution(citations) {
  let answer = 0;
  // console.log(citations);
  let temp = 0;
  for (let i = 1; i <= citations.length; i++) {
    let count = 0;
    citations.forEach((element) => {
      if (element >= i) {
        count += 1;
      }
      if (count >= i) {
        temp = i;
      }
      // console.log(temp);
    });
  }
  answer = temp;
  return answer;
}
const citations = [3, 0, 6, 1, 5];
