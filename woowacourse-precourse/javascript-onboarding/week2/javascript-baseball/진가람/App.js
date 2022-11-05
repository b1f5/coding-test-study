const { Console } = require('@woowacourse/mission-utils');
const { playRoutine } = require('./game');
const { randomGoalNumber } = require('./utils');

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const GOAL_NUMBER = randomGoalNumber();
    playRoutine(GOAL_NUMBER);
  }
}

const app = new App();
app.play();

module.exports = App;
