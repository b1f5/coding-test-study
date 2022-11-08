const { Console } = require("@woowacourse/mission-utils");

const { MESSAGE, GAME } = require("./constant");
const generateComputerAnswer = require("./generateComputerAnswer");

/**
 * 사용자에게 게임의 재시작 또는 종료 여부를 묻고 분기 처리하는 함수
 */
function askRestartOrStop() {
  Console.print(MESSAGE.win);
  Console.readLine(MESSAGE.restartOrStop, (answer) => {
    if (answer === GAME.restart) restartGame();
    if (answer === GAME.stop) stopGame();
    if (answer !== GAME.restart && answer !== GAME.stop) throw new Error();
  });
}

function restartGame() {
  const computerAnswer = generateComputerAnswer();
  playSubroutine(computerAnswer);
}

function stopGame() {
  Console.close();
}

module.exports = askRestartOrStop;
const playSubroutine = require("./playSubroutine");
