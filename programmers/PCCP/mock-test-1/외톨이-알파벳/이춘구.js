function solution(input_string) {
  const answer = [];
  const checked = [];
  const letters = input_string.split("");

  for (const letter of letters) {
    if (checked.includes(letter)) continue;

    const pattern = `${letter}+`;
    const regex = new RegExp(pattern, "g");
    const matches = input_string.match(regex);

    if (matches.length > 1) {
      checked.push(letter);
      answer.push(letter);
    }
  }

  return answer.sort().join("") || "N";
}
