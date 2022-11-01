//1. 문자를 아스키코드로 바꾼다.
//2. 해당 숫자가 lowercase에서 index가 몇번쨰인지 구한다.
//3. 구한 index값을 frogLowerCase[2번에서 구한 index값]의 결과를 구한다.
//4. 구한 아스키코드 숫자를 다시 문자열로 바꾼다.
const lowerCase = [];
const frogLowerCase = [];
const upperCase = [];
const frogUpperCase = [];
function createLowerCaseChar() {
  let a = 97;
  for (let i = 97; i <= 122; i++) {
    lowerCase.push(i);
  } // 아스키코드 소문자 순서 배열
  for (let i = 122; i >= a; i--) {
    frogLowerCase.push(i);
  } // 아스키코드 소문자를 거꾸로 배열시킴
}
function createUpperChar() {
  let a = 65;
  for (let i = 65; i <= 90; i++) {
    upperCase.push(i);
  } // 아스키코드 소문자 순서 배열
  for (let i = 90; i >= a; i--) {
    frogUpperCase.push(i);
  } // 아스키코드 소문자를 거꾸로 배열시킴
}
createLowerCaseChar();
createUpperChar();
function solution(words) {
  let charResult = [];
  let charArray = [];
  for (let i = 0; i < words.length; i++) {
    let wordArray = words.charCodeAt([i]);
    charArray.push(wordArray);
  }
  for (char of charArray) {
    if (65 <= char && char <= 90) {
      let upperIndex = upperCase.indexOf(char);
      let frogUpperIndex = frogUpperCase[upperIndex];
      charResult.push(frogUpperIndex);
    } else if (97 <= char && char <= 122) {
      let lowerIndex = lowerCase.indexOf(char);
      let frogLowerIndex = frogLowerCase[lowerIndex];
      charResult.push(frogLowerIndex);
    } else {
      let index = char;
      charResult.push(index);
    }
  }
  return String.fromCharCode(...charResult);
}
const word = "I love you";
console.log(solution(word));
