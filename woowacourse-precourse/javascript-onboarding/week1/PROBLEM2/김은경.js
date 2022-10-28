function problem2(cryptogram) {
  let pattern = /([a-z])\1+/g;
  let decode = cryptogram;
  // 더이상 중복되는 문자열이 없을 때 까지 중복문자 제거를 반복
  while (pattern.test(decode)) {
    decode = decode.replace(pattern, '');
  }
  // 중복문자열 제거가 완료된 변수 decode를 리턴, 남아있는 문자열이 없는경우 공백을 리턴한다.
  return decode ? decode : '';
}

module.exports = problem2;

// 정규표현식 패턴 : /([a-z])\1+/g
// 문자열은 알파벳 소문자로만 이루어져 있으므로 [a-z]로 범위를 지정
// \1+ : 캡쳐그룹([a-z])와 같은 문자가 1개 또는 그 이상 이어진 경우를 찾음
// g : 조건에 해당하는 모든 값을 찾음
