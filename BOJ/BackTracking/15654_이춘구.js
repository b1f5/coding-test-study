const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [_, M] = input[0].split(" ").map(Number);
const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(makePermutations(M, numbers).join("\n"));

function makePermutations(M, numbers) {
  if (M === 1) return numbers.map((number) => [number]);

  const result = [];

  numbers.forEach((fixed, i) => {
    const rest = [...numbers.slice(0, i), ...numbers.slice(i + 1)];
    const restPermutations = makePermutations(M - 1, rest);
    const attached = restPermutations.map((permutation) => [
      [fixed, ...permutation].join(" "),
    ]);
    result.push(...attached);
  });

  return result;
}
