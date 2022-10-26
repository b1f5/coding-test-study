function gcd(n1, n2) {
  return n2 ? gcd(n2, n1 % n2) : n1;   
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  
  let divisor = gcd(denum, num);
  
  return [denum / divisor, num / divisor];
}