let cryptogram = "browoanoommnaon";
let reg = /([a-z])\1+/;
function problem2(cryptogram) {
  let answer = cryptogram;
  while (reg.test(answer)) {
    check(answer);
  }
  //연속되는 글자를 word에 재할당 해주는 함수
  function check(checkword) {
    answer = "";
    if (reg.test(checkword)) {
      let checked = checkword.replace(/(.)\1/, "");
      answer = checked;
    } else {
      answer = checkword;
    }
  }
  return answer;
}

console.log(problem2(cryptogram));
