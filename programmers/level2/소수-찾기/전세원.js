function solution(numbers) {
  var answer = 0;
  const temp = [];
  const splitNumbers = numbers.split("");
  function getPermutations(arr, selectNumbers) {
    const result = [];
    if (selectNumbers === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumbers - 1);
      const attached = permutations.map((el) => [fixed, ...el]);
      result.push(...attached);
    });
    return result;
  }
  for (let i = 1; i <= splitNumbers.length; i++) {
    const allArrays = getPermutations(splitNumbers, i);
    allArrays.forEach((element) => {
      const joined = Number(element.join(""));
      temp.push(joined);
    });
  }
  const filterDuplication = temp.filter(
    (attachedEl, i) => temp.indexOf(attachedEl) === i
  );
  console.log(filterDuplication);
  function checkPrimeNumber(element) {
    element = Number(element);
    if (!element || element === 1) return false;
    for (let i = 2; i <= Math.sqrt(element); i++) {
      if (element % i === 0) return false;
    }
    return true;
  }
  filterDuplication.forEach((filteredElement) =>
    checkPrimeNumber(filteredElement) ? (answer += 1) : answer
  );
  return answer;
}
