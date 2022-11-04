const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor(guessNum) {
    this.guessNum = this.generateGuessNum();
  }
  generateGuessNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  play() {
    MissionUtils.Console.print(`=== Guess Numbers : ${this.guessNum} ===`);
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다');
    app.getInput();
  }
  getInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const userNumbers = answer.split('');
      try {
        if (this.guessNum.join('') === answer) {
          this.printWin();
        } else if (app.checkInput(userNumbers)) {
          this.gameProceed(userNumbers, this.guessNum);
        }
      } catch (err) {
        MissionUtils.Console.print(err);
        // MissionUtils.Console.close();
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
      throw new RangeError();
    }
    // 숫자가 아닌 값이 입력 될 경우
    input.forEach((el) => {
      if (isNaN(parseInt(el))) {
        throw new TypeError();
      }
    });
    return true;
  }

  gameProceed(userNumbers, guessNum) {
    let strike = 0;
    let ball = 0;
    let cnt = 0;
    for (let i = 0; i < guessNum.length; i++) {
      const index = userNumbers.indexOf(guessNum[i].toString());
      if (index === -1) {
        cnt += 1;
      } else {
        if (index === i) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    }
    if (cnt === 3) {
      MissionUtils.Console.print('낫싱');
      app.getInput();
    } else {
      app.printScore(strike, ball);
      app.getInput();
    }
  }

  printScore(strike, ball) {
    if (strike === 0) {
      return MissionUtils.Console.print(`${ball}볼`);
    }
    if (ball === 0) {
      return MissionUtils.Console.print(`${strike}스트라이크`);
    }
    return MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  printWin() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (answer) => {
        switch (answer) {
          case '1':
            app.guessNum = this.generateGuessNum();
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
