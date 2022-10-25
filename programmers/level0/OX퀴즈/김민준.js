function solution(quizList) {
  let result = [];
  
  for(let quiz of quizList) {
      let [expression, answer] = quiz.split('=');
      
      if(eval(expression) === Number(answer)) result.push('O');
      else result.push('X');
  }
  
  return result;
}