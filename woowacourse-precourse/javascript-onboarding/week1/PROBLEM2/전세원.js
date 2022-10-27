let cryptogram = "zayelleyz";

function solution(consecutiveWord) {
  let word = consecutiveWord;
  while (/(.)\1/.test(word)) {
    check(word);
  }
  //연속되는 글자를 word에 재할당 해주는 함수
  function check(checkword) {
    word = "";
    if (/(.)\1/.test(checkword)) {
      let checked = checkword.replace(/(.)\1/, "");
      word = checked;
    } else {
      word = checkword;
    }
  }
  return word;
}

console.log(solution(cryptogram));
