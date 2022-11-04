const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  play() {
    this.showStartMessage();

    const randomNumber = this.makeRandomNumber();
    console.log(randomNumber)

    this.getUsersPrediction(randomNumber);
    
  }

  makeRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1,9);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }
    return randomNumber;
  }

  showStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  isRightAnswer(randomNumber, userInput) {
    return randomNumber.join('') === userInput.join('');
  }

  isNothing(randomNumber, userInput) {
    randomNumber.filter((number, index) => {

    });
    randomNumber.filter((val,idx,arr))
  }

  getUsersPrediction(randomNumber) {
    Console.readLine('숫자를 입력해주세요 : ', (prediction) => {
      const convertedNumber = prediction.split('').map(stringOfNumber => parseInt(stringOfNumber));
      
      if (this.isRightAnswer(randomNumber, convertedNumber)) {
        this.getUsersNextAction();
      } else if (this.isNothing(randomNumber, convertedNumber)) {
        Console.print('낫싱');
        this.getUsersPrediction(randomNumber);
      } else {
        const [ballCount, strikeCount] = this.calculateCount(randomNumber, convertedNumber);
        this.showCountMessage(ballCount, strikeCount);
      }
    });
  }

  calculateCount(randomNumber, userInput) {
    let ballCount = 0;
    let strikeCount = 0;
    randomNumber.forEach((number, index) => {
      if (userInput.includes(number) && index !== userInput.indexOf(number)) {
        ballCount++;
      } else if(userInput[index] === number) {
        strikeCount++;
      }
    });
    return [ballCount, strikeCount];
  }

  showCountMessage(ballCount, strikeCount) {
    Console.print(`${ballCount}볼 ${strikeCount}스트라이크`)
  }

  getUsersNextAction() {
    Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
      if (answer === '1') {
        app.play();
      } else if (answer === '2') {
        Console.close();
      }
    });
  }

  finishApplication() {}
}
const app = new App();
app.play();

module.exports = App;
