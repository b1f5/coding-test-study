function solution(word) {
  let answer;
  const vowels = ["A", "E", "I", "O", "U"];
  let cnt = 0;
  const DFS = (inp) => {
    if (inp === word) {
      answer = cnt;
    }

    if (inp.length >= 5) {
      return;
    }

    for (let i = 0; i < vowels.length; i++) {
      cnt++;
      DFS(inp + vowels[i]);
    }
  };
  DFS("");
  return answer;
}
