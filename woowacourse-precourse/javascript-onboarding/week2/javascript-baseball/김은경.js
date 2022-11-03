const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    // prettier-ignore
    const guessNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).sort();
    MissionUtils.Console.print(`=== Guess Numbers : ${guessNum} ===`);

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다');
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (answer) => {
      const userNumbers = answer.split('');
      try {
        if (this.checkInput(userNumbers)) {
          MissionUtils.Console.print('=== valid input ===');
        }
      } catch (err) {
        MissionUtils.Console.print('=== invalid input ===');
        MissionUtils.Console.close();
      }
    });
  }
  checkInput(input) {
    // 입력값이 3개가 아닌경우
    if (input.length !== 3) {
      throw new RangeError();
    }
    // 중복값이 있는경우
    if (new Set(input).size !== 3) {
      throw new Error();
    }
    // 숫자가 아닌 값이 입력 될 경우
    input.forEach((el) => {
      if (isNaN(parseInt(el))) {
        throw new TypeError();
      }
    });
    return true;
  }
}
const app = new App();
app.play();
