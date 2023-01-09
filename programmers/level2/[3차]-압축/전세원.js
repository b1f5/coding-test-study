const msg = "KAKAO";
const msg2 = "TOBEORNOTTOBEORTOBEORNOT";

function solution(msg) {
  var answer = [];
  const dictionary = {};
  let alphabet = 65;
  let alphabetOrder;
  for (alphabetOrder = 1; alphabetOrder <= 26; alphabetOrder++) {
    dictionary[String.fromCharCode(alphabet)] = alphabetOrder;
    alphabet++;
  }

  let wordMsg = msg;
  while (wordMsg.length) {
    wordMsg = verifyIncludes(wordMsg);
  }
  function verifyIncludes(word) {
    let verifiedMsg;
    let answerTemp;

    for (i = word.length; i > 0; i--) {
      const searchWord = word.slice(0, i);
      if (dictionary[searchWord]) {
        verifiedMsg = word.slice(i);
        answerTemp = dictionary[searchWord];
        const newWord = word.slice(0, i + 1);
        if (!dictionary[newWord]) {
          dictionary[newWord] = alphabetOrder;
          alphabetOrder++;
        }
        break;
      }
    }
    answer.push(answerTemp);
    return verifiedMsg;
  }
  return answer;
}

console.log(solution(msg));
console.log(solution(msg2));
