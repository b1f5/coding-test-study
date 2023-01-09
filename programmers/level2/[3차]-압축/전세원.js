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
  console.log(dictionary);
  let wordMsg = msg;
  while (wordMsg.length) {
    wordMsg = verifyIncludes(wordMsg);
    console.log("wordMsf", wordMsg);
  }
  function verifyIncludes(word) {
    let verifiedMsg;
    let answerTemp = [];
    let wordIdx = [];

    for (i = word.length; i > 0; i--) {
      const searchWord = word.slice(0, i);
      if (dictionary[searchWord]) {
        wordIdx.push(i);
        answerTemp.push(dictionary[searchWord]);
        console.log(i, dictionary[searchWord]);
        const newWord = word.slice(0, i + 1);
        if (!dictionary[newWord]) {
          dictionary[newWord] = alphabetOrder;
          alphabetOrder++;
          console.log(dictionary);
        }
      }
    }
    console.log(wordIdx);
    verifiedMsg = word.slice(wordIdx[0]);
    answer.push(answerTemp[0]);
    return verifiedMsg;
  }
  return answer;
}

console.log(solution(msg));
console.log(solution(msg2));
