function solution(queries) {
  const calculator = ([n, p]) => {       
      if (n <= 2) {
          if (n === 1) return 'Rr';
          if (p === 0) return 'RR';
          if (p === 3) return 'rr';
          return 'Rr';
      }
      
      const specialValue = Math.pow(4, n - 2);
      
      if (p < specialValue) {
          return 'RR';
      }
      
      if (p >= specialValue * 3) {
          return 'rr';
      }
      
      const convertedP = p % specialValue;
      
      return calculator([n - 1, convertedP]);
  }
  
  return queries.map(query => calculator([query[0], query[1] - 1]));
}