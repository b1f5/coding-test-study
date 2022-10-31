/**
 * 암호문의 중복을 제거해 해독하는 함수
 * @param {string} cryptogram 암호 문자
 * @returns {string} 해독 문자
 */
function problem2(cryptogram) {
  if (cryptogram.length === 1) return cryptogram;

  for (let i = 0; i < cryptogram.length - 1; i++) {
    for (let j = i + 1; j <= i + 1; j++) {
      if (cryptogram[i] !== cryptogram[j]) break;
      else {
        cryptogram = cryptogram.replace(`${cryptogram[i]}${cryptogram[j]}`, '');
        i = i - 2;
      }
    }
  }
  return cryptogram;
}
