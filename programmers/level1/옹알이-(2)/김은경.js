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

// expected result : 1
console.log(solution(['aya', 'yee', 'u', 'maa']));

// expected result : 2
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']));
