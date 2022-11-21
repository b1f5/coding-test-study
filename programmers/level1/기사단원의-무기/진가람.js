function solution(number, limit, power) {
  let factors;
  let res = 0;
  for (let i = 1; i <= number; i++) {
    factors = countFactors(i);
    res += isgreaterThanLimit(factors) ? power : factors;
  }
  return res;

  function isgreaterThanLimit(num) {
    return num > limit;
  }
}

function countFactors(num) {
  if (num === 1) return num;

  const sqrt = Math.sqrt(num);

  let count = 2;
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      if (i ** 2 === num) count++;
      else count += 2;
    }
  }
  return count;
}
