// convertToFrogDictionary : 영문 대소문자의 ASCII CODE를 한글자씩 입력 받아 반대로 바꿔 리턴하는 함수
function convertToFrogDictionary(targetChar) {
  //문자열이 대문자(65~90)인 경우 대체문자 찾기
  if (targetChar >= 65 && targetChar <= 90) {
    return String.fromCharCode(90 - (targetChar - 65));
    //문자열이 소문자(97~122)인 경우 대체문자 찾기
  } else if (targetChar >= 97 && targetChar <= 122) {
    return String.fromCharCode(122 - (targetChar - 97));
  }
}

function problem4(word) {
  const words = word.split('');
  const result = [];
  for (char of words) {
    const pattern = /[a-zA-Z]/;
    // char가 알파벳이라면
    if (pattern.test(char)) {
      // char를 ASCII CODE로 변환
      const targetASCII = char.charCodeAt();
      // convertToFrogDictionary 함수를 실행하여, 리턴값을 result에 푸시
      result.push(convertToFrogDictionary(targetASCII));
    } else {
      // char가 알파벳이 아니라면, 변환하지 않고 그대로 result에 푸시
      result.push(char);
    }
  }
  // result 배열을 문자열로 리턴
  return result.join('');
}

module.exports = problem4;
