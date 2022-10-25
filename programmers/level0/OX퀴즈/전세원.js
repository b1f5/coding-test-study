function solution(quiz) {
  var answer = [];
  for (e of quiz) {
    let preanswer = [];
    let splitE = e.split(" ");
    let filterE = splitE.filter((a) => a !== "=");
    let mapE = filterE.map((e) => {
      return parseInt(e, 10);
    });
    console.log(mapE);
    console.log(filterE[1] == "+");
    if (filterE[1] === "-") {
      let result = mapE[0] - mapE[2];
      console.log(result);
      if (mapE[3] === mapE[0] - mapE[2]) {
        console.log(mapE[0] - mapE[2]);
        answer.push("O");
      } else {
        answer.push("X");
      }
    } else if (filterE[1] === "+") {
      let result = mapE[0] + mapE[2];
      console.log(result);
      if (mapE[3] == mapE[0] + mapE[2]) {
        console.log(mapE[0] + mapE[2]);
        answer.push("O");
      } else {
        answer.push("X");
      }
    } else {
      answer.push("X");
    }
  }
  return answer;
}
