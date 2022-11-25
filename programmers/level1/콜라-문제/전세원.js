function solution(a, b, n) {
  var answer = 0;
  let currentCola = n;
  if (currentCola === n) {
    while (currentCola >= a) {
      let cal = Math.floor(currentCola / a);
      let getCola = cal * b;
      let lostCola = cal * a;
      currentCola = currentCola - lostCola + getCola;
      answer += getCola;
    }
  }

  return answer;
}
