const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    // prettier-ignore
    const guessNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).sort();
    console.log(`=== Guess Numbers : ${guessNum} ===`);
  }
}

const app = new App();
app.play();
