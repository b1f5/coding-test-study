function solution(survey, choices) {
  var answer = "";
  const temp = {}; // survey와 choices를 통해 어떤 캐릭터가 몇점을 얻는지 보관하는 곳
  const choiceScore = { 1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3 };
  const PERSONALITY = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for (i = 0; i < choices.length; i++) {
    const [left, right] = survey[i].split("");
    const eachChoice = Number(choices[i]);
    const score = choiceScore[eachChoice]; //점수 산출
    if (eachChoice < 4) {
      const winner = left;
      PERSONALITY[winner] += score;
    } else if (eachChoice > 4) {
      const winner = right;
      PERSONALITY[winner] += score;
    }
  }
  console.log(PERSONALITY);
  const arrayPersonality = Object.entries(PERSONALITY);
  console.log(arrayPersonality);
  for (i = 0; i < arrayPersonality.length; i += 2) {
    const leftCharacter = arrayPersonality[i];
    const rightCharacter = arrayPersonality[i + 1];
    if (leftCharacter[1] >= rightCharacter[1]) {
      answer += leftCharacter[0];
    } else {
      answer += rightCharacter[0];
    }
  }
  console.log(answer);
  return answer;
}
