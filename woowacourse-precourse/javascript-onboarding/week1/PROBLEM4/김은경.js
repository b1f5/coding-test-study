function problem4(word) {
  const words = word.split('');
  const result = [];
  for (e of words) {
    if (e === ' ') {
      // 문자열이 공백이면 result배열에 공백을 담아줌
      result.push(' ');
    } else {
      // 문자열이 공백이 아니라면
      const targetASCII = e.charCodeAt();
      let replaceWord = '';
      //문자열이 대문자인 경우 대체문자 찾기
      if (targetASCII >= 65 && targetASCII <= 90) {
        replaceWord = String.fromCharCode(90 - (targetASCII - 65));
        //문자열이 소문자인 경우 대체문자 찾기
      } else if (targetASCII >= 97 && targetASCII <= 122) {
        replaceWord = String.fromCharCode(122 - (targetASCII - 97));
      }
      // 찾은 대체문자를 result 배열에 담아줌
      result.push(replaceWord);
    }
  }
  // result 배열을 문자열로 리턴
  return result.join('');
}

module.exports = problem4;
