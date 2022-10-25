/**
 * quiz	result
 * ["3 - 4 = -3", "5 + 6 = 11"]	["X", "O"]
 * ["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]	["O", "O", "X", "O"]
 */

function solution(quiz) {
  var answer = [];
  for (q of quiz) {
    let temp = q.split(" ");
    // console.log(temp);
    let result;
    switch (temp[1]) {
      case "-":
        // console.log(parseInt(temp[0]) - parseInt(temp[2]));
        result =
          parseInt(temp[0]) - parseInt(temp[2]) ==
          temp.at(-1)
            ? "O"
            : "X";
        answer.push(result);
        break;

      case "+":
        // console.log(parseInt(temp[0]) + parseInt(temp[2]));
        result =
          parseInt(temp[0]) + parseInt(temp[2]) ==
          temp.at(-1)
            ? "O"
            : "X";
        answer.push(result);
        break;
    }
  }
  // console.log(answer);
  return answer;
}

solution(["3 - 4 = -3", "5 + 6 = 11"]);
