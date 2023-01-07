function solution(people, limit) {
  var answer = 0;
  let n = people.length;
  let complete = [];
  let maxIdx = 0;
  let minIdx = n - 1;
  people.sort((a, b) => b - a); // DESC
  while (complete.length < n) {
    const max = people[maxIdx];
    const min = people[minIdx];
    if (max + min <= limit) {
      complete.push(max, min);
      maxIdx++;
      minIdx--;
    } else {
      complete.push(max);
      maxIdx++;
    }
    answer++;
  }
  return answer;
}
