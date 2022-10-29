function problem5(money) {
  const currencies = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let result = [];
  // 5만원권 부터 돌면서 갯수를 구해서 result에 푸시한 뒤,
  // 푸시한 돈만큼 money에서 빼준 뒤 다음 지폐(1만원)로 넘어감
  for (let currency of currencies) {
    let numberOfTheCurrency = Math.floor(money / currency);
    result.push(numberOfTheCurrency);
    money = money - currency * numberOfTheCurrency;
  }
  return result;
}
