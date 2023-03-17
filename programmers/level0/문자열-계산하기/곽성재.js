function solution(my_string) {
  var answer = 0;
  const arr = my_string.split(" ");
  answer += Number(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el === "+") answer += Number(arr[i + 1]);
    if (el === "-") answer -= Number(arr[i + 1]);
  }
  return answer;
}

console.log(solution("3 + 4"));
