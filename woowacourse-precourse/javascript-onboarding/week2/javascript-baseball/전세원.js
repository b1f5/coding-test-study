const { Console, Random } = require("@woowacourse/mission-utils");
let computer = [];
class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    computer = [];
    randomNumber();
    insertAnswer();
  }
}

function randomNumber() {
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(parseInt(number, 10));
    }
  }
  Console.print(computer);
}

function insertAnswer() {
  Console.readLine("숫자를 맞춰주세요", (answer) => {
    36;
    // Console.close();
    validateInput(answer);
    let hint = scoreInput(Array.from(answer));
    if (showHint(hint) === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      restartOrEnd();
    } else {
      insertAnswer();
    }
  });
}

//input의 길이는 3이어야 하고, 숫자 1-9사이로 이루어져야 한다.
function validateInput(input) {
  let regexp = /^[1-9]+$/; //1-9가 들어갔는지 확인
  if (regexp.test(input) && input.split("").length === 3) {
    return true;
  } else {
    throw "you inserted wrong";
  }
}

function scoreInput(answer) {
  let count = { ball: 0, strike: 0, nothing: 0 };
  answer.forEach((element) => {
    let indexElement = answer.indexOf(element);
    element = parseInt(element, 10);
    if (element === computer[indexElement]) {
      count.strike += 1;
    } else if (computer.includes(element)) {
      count.ball += 1;
    } else {
      count.nothing += 1;
    }
  });
  return count;
}

function showHint(obj) {
  let ballNum = Number(obj.ball);
  let strikeNum = Number(obj.strike);
  let nothingNum = Number(obj.nothing);
  if (strikeNum === 3) {
    Console.print("3스트라이트");
    return strikeNum;
  }
  if (0 < ballNum < 3 && 0 < strikeNum < 3) {
    Console.print(`${ballNum}볼 ${strikeNum}스트라이크`);
  }
  if (ballNum !== 0 && strikeNum === 0) {
    Console.print(`${ballNum}볼`);
  }
  if (ballNum === 0 && 0 < strikeNum < 3) {
    Console.print(`${strikeNum}스트라이크`);
  }
  if (nothingNum === 3) {
    Console.print("낫싱");
  }
}

function restartOrEnd() {
  Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (answer) => {
      let answered = Number(answer);
      if (answered === 1) {
        let game = new App();
        game.play();
      }
      if (answered === 2) {
        Console.close();
      }
    }
  );
}
let gameStart = new App();
console.log(gameStart.play());
module.exports = App;
