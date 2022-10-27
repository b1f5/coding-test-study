function problem2(cryptogram) {
  let pattern = /(\w)\1+/g;
  let decode = cryptogram;
  while (pattern.test(decode)) {
    decode = decode.replace(pattern, '');
    console.log(decode);
  }
  return decode ? decode : '';
}

module.exports = problem2;

// /(\w)\1/
// (\w) : 첫번째 캡쳐그룹
// \w : 63개 문자에 일치 ([a-zA-Z0-9_] 와 같음)
// \1~9 : 정규식 내 1~9번째 캡쳐그룹 참조
// + : 1회 이상 연속으로 반복되는 문자에 가능한 많이 일치, {1,}와 동일
// g : 모든 문자와 여러줄 일치(global)
