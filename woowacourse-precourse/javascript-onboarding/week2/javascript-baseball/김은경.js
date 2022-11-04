const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  constructor(guessNum) {
    this.guessNum = this.generateGuessNum();
  }
  generateGuessNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  play() {
    Console.print('숫자 야구 게임을 시작합니다');
    this.getInput();
  }
  getInput() {
    Console.print(`=== 테스트용 정답 : ${this.guessNum} ===`);
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const userNumbers = answer.split('');
      try {
        if (this.checkInput(userNumbers)) {
          this.gameProceed(userNumbers, this.guessNum);
        }
      } catch (err) {
        Console.close();
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
    if (this.guessNum.join('') === userNumbers.join('')) {
      return this.printWin();
    }
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
      Console.print('낫싱');
      this.getInput();
    } else {
      this.printScore(strike, ball);
      this.getInput();
    }
  }

  printScore(strike, ball) {
    if (strike === 0) {
      return Console.print(`${ball}볼`);
    }
    if (ball === 0) {
      return Console.print(`${strike}스트라이크`);
    }
    return Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  printWin() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
        switch (answer) {
          case '1':
            this.guessNum = this.generateGuessNum();
            this.getInput();
            break;
          case '2':
            Console.close();
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
