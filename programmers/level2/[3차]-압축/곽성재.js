function solution(msg) {
  let answer = [];
  const dict = [];
  for (let i = 0; i < 26; i++) {
    dict.push(String.fromCharCode(65 + i));
  }
  let i = 0;
  // 문자열을 순회하며 사전에 있으면 다음 문자열로 넘어가면서 사전에 등록
  while (i < msg.length) {
    let j = 2; // substring이 종료 인덱스 전까지 자르니까
    // 문자열이 없을때까지 찾는다.
    // prettier-ignore
    while (dict.indexOf(msg.substring(i, i + j)) !== -1 && i + j <= msg.length) {
      j++;
    }
    // 없는 문자열을 사전에 등록
    dict.push(msg.substring(i, i + j));
    // 현재 입력을 사전의 색인번호로 답에 추가 (+1조심)
    answer.push(dict.indexOf(msg.substring(i, i + j - 1)) + 1);
    i += j - 1;
  }
  return answer;
}

console.log(solution("KAKAO")); //[11, 1, 27, 15]
