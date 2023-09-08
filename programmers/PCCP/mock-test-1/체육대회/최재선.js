function solution(ability) {
  const { length } = ability;
  const count = ability[0].length;
  const useStudentMemo = new Array(length).fill(false);
  const useClassMemo = new Array(count).fill(false);
  
  const buckets = new Array(count).fill().map(_ => new Array(length).fill(null));
  
  for (let i = 0; i < length; i += 1) {
      const targetAbility = ability[i];
      for (let j = 0; j < count; j += 1) {
          buckets[j][i] = { student: i, score: targetAbility[j], class: j }
      }
  }
  
  for (let i = 0; i < count; i += 1) {
      buckets[i].sort((a, b) => b.score - a.score);
  }
  
  console.log(buckets);
  
  let result = 0;
  
  const recursive = (n, sum) => {
      if (n === count) {
          result = Math.max(sum, result);
          return;
      }
      
      const possibles = [];
      
      for (let i = 0; i < count; i += 1) {
          if (!useClassMemo[i]) {
              for (let j = 0; j < length; j += 1) {                    
                  const { student, score } = buckets[i][j];
                  
                  if (!useStudentMemo[student]) {
                      possibles.push(buckets[i][j]);
                      break;
                  }
              }
          }
      }
      
      for (const possible of possibles) {
          useStudentMemo[possible.student] = true;
          useClassMemo[possible.class] = true;
          
          recursive(n + 1, sum + possible.score);
          
          useStudentMemo[possible.student] = false;
          useClassMemo[possible.class] = false;
      }
  }
  
  recursive(0, 0);
  
  return result;
}