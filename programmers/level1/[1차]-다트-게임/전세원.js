const dartResult = "1S2D*3T";
function solution(dartResult) {
  let answer = 0;
  const analyzedResult = [];
  const divideResult = dartResult.split(""); // ['1', 'D', '2', 'S', '#', '1', '0', 'S', '*']
  while (divideResult.length) {
    for (let i = 0; i < divideResult.length; i++) {
      if (divideResult[i].match(/[A-Z]/g)) {
        const stack = [];
        if (divideResult[i + 1] === "#" || divideResult[i + 1] === "*") {
          stack.push(divideResult.splice(0, i + 2));
          validateResult(...stack);
          i = 0;
        } else {
          stack.push(divideResult.splice(0, i + 1));
          validateResult(...stack);
          i = 0;
        }
      }
    }
  }
  calWithOption(analyzedResult);
  function calWithOption() {
    const tempResult = [];
    for (let i = 0; i < analyzedResult.length; i++) {
      const [score, bonus, option] = analyzedResult[i];
      tempResult.push(calWithoutOption(score, bonus));
      if (option === "*") {
        tempResult.length - 1 === 0
          ? (tempResult[tempResult.length - 1] *= 2)
          : ((tempResult[tempResult.length - 1] *= 2),
            (tempResult[tempResult.length - 2] *= 2));
      } else if (option === "#") {
        tempResult[tempResult.length - 1] *= -1;
      }
    }
    console.log(tempResult);
    answer += tempResult.reduce((a, b) => a + b);
  }

  function calWithoutOption(score, bonus) {
    let resultWithoutOption = 0;
    switch (bonus) {
      case "S":
        resultWithoutOption += score;
        break;
      case "D":
        resultWithoutOption += Math.pow(score, 2);
        break;
      case "T":
        resultWithoutOption += Math.pow(score, 3);
        break;
    }
    return resultWithoutOption;
  }
  function validateResult(stack) {
    // const validatedResult = [score, bonus, option];
    console.log(stack);
    let score = "";
    let bonus = "";
    let option = "";
    stack.forEach((element) => {
      if (element.match(/\d/g)) {
        score += Number(element);
      } else if (element.match(/[A-Z]/g)) {
        bonus += element;
      } else {
        option += element;
      }
    });
    analyzedResult.push([Number(score), bonus, option]);
  }
  return answer;
}

solution(dartResult);
