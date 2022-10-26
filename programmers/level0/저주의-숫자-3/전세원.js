function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += 1;
    check3();
  }

  function check3() {
    if (result % 3 === 0 || String(result).includes("3")) {
      result += 1;
      check3();
    } else {
      return result;
    }
  }
  return result;
}
