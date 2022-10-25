// 1. 정규식을 사용하는 방법
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  // 패턴과 일치하는 부분 문자열이 하나라도 있는 경우
  // 메서드 regexp.test(str)을 호출하면 true가, 그렇지 않으면 false가 반환.
  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}

// 2. 정규식을 사용하지 않는 방법
function solution(babblingList) {
  const POSSIBLE_LIST = ['aya', 'ye', 'woo', 'ma'];
  let result = [];

  for (let babbling of babblingList) {
    for (const POSSIBLE of POSSIBLE_LIST) {
      babbling = babbling.replaceAll(`${POSSIBLE}${POSSIBLE}`, 'X');
      babbling = babbling.replaceAll(POSSIBLE, '');
    }
    result.push(babbling);
  }
  return result.filter((el) => el === '').length;
}

console.log(
  solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa', 'ayayeaya'])
);
