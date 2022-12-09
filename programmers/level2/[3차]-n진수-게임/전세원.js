function solution(n, t, m, p) {
  var answer = "";
  const temp = [];
  while (temp.length < t * m) {
    for (let i = 0; i < t * m; i++) {
      temp.push(i.toString(n).toUpperCase());
    }
  }
  const joinedTemp = temp.join("");
  const resultForSpeak = joinedTemp.slice(0, t * m);
  const tubeSpeak = resultForSpeak.split("");
  for (let i = 0; i < tubeSpeak.length; i++) {
    if (i % m === p - 1) {
      answer += tubeSpeak[i];
    }
  }
  return answer;
}
