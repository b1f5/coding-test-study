function solution(number, limit, power) {
  const divisorsCnt = [];
  for (let j = 1; j <= number; j++) {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(j); i++) {
      if (j % i === 0) {
        divisors.push(i);
        if (j / i != i) divisors.push(j / i);
      }
    }
    divisorsCnt.push(divisors.length);
  }
  const overPower = divisorsCnt.filter((num) => num > limit);
  const sum = divisorsCnt.reduce((prev, cur) => prev + cur, 0);
  const overPowerSum = overPower.reduce((prev, cur) => prev + cur, 0);
  const changes = overPower.length * power;
  return sum - overPowerSum + changes;
}
