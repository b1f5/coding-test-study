const MissionUtils = require('@woowacourse/mission-utils');

const guessNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).sort();
console.log(`=== 테스트용 임의의 숫자 : ${guessNum} ===`);

class App {
  play() {}
}
