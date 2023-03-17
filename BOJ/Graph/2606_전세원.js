let fs = require('fs');
let input = fs.readFileSync("예제.txt").toString().trim().split('\n');
const connectedComputers = input.splice(2) // 이어진 컴퓨터들 배열

function solution () {
  const netWork = [];

  connectedComputers.forEach((array) => {
    const [computerA, computerB] = array.split(" ");
    const computerAIndex = searchComputer(computerA);
    const computerBIndex = searchComputer(computerB);
    const indexOfNetWorkA =  computerAIndex[1];
    const indexOfNetWorkB = computerBIndex[1];

    if (computerAIndex[0] && computerBIndex[0]) {
      if (indexOfNetWorkA !== indexOfNetWorkB) {
        netWork[indexOfNetWorkA].push(...netWork[indexOfNetWorkB])
        netWork[indexOfNetWorkB] = [];

        return;
      }
    }

    if (computerAIndex[0]){
      netWork[indexOfNetWorkA].push(computerB);
      return;
    }

    if (computerBIndex[0]){
      netWork[indexOfNetWorkB].push(computerA);

      return;
    }

    netWork.push([computerA, computerB]);
  })

  function searchComputer(computer){
    let answer = false;
    let computerIndex = 0;
    netWork.forEach((array,index) => {
      if(array.indexOf(computer) !== -1){
        answer = true;
        computerIndex = index;
      }
    })

    return [answer, computerIndex];
  }

  const netWorkIndex = searchComputer("1")[1];
  const answerArray = [...new Set(netWork[netWorkIndex])] ;
  const answer = answerArray.length - 1;

  return answer.toString();
}


console.log(solution());
