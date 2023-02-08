function getGCD(n1, n2) {
  return n1 % n2 === 0 ? n2 : getGCD(n2, n1 % n2);
}

function solution(w, h) {
  return w * h - (w + h - getGCD(w, h));
}