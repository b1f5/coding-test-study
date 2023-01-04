function solution(chicken) {
  var answer = 0;
  let coupon = chicken;
  let bonusChicken = 0;
  while (coupon >= 10) {
    console.log(coupon, bonusChicken);
    const changeToChicken = Math.floor(coupon / 10);
    bonusChicken += changeToChicken;
    coupon = coupon + changeToChicken - changeToChicken * 10;
  }
  answer += bonusChicken;
  return answer;
}
