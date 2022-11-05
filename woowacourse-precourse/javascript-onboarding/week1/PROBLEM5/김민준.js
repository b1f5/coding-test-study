function solution() {
  let money = 50237;
  // let money = 15000;
  let moneyTypeList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let result = Array.from({ length: moneyTypeList.length }, () => 0);

  moneyTypeList.forEach((el, idx) => {
    result[idx] = Math.floor(money / el);
    money %= el;
  });

  console.log(result);
}

solution();