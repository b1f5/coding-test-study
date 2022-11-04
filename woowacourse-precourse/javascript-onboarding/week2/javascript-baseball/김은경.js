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
          // MissionUtils.Console.print('=== valid input ===');
        }
        if (answer === guessNum.join('')) {
          this.printWin();
        }
      } catch (err) {
        // MissionUtils.Console.print('=== invalid input ===');
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
  printWin() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (answer) => {
        switch (answer) {
          case '1':
            this.play();
            break;
          case '2':
            MissionUtils.Console.close();
            break;
          default:
            this.printWin();
        }
      }
    );
  }
}
const app = new App();
app.play();
