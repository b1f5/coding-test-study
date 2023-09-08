function solution(program) {
  const result = new Array(11).fill(0);
  const queues = new Array(10).fill().map(_ => []);
  let queueCount = 0;
  
  program.sort((a, b) => {
      if (a[1] !== b[1]) return a[1] - b[1];
      return a[0] - b[0];
  });
  
  let time = 0;
  
  const execute = (program) => {
      const [score, programStartTime, spendTime] = program;
      
      if (programStartTime > time) {
          time = programStartTime;
      } else if (programStartTime < time) {
          result[score] += time - programStartTime;
      }
      
      time += spendTime;
  }
  
  const executeInQueues = () => {
      for (const queue of queues) {
          if (queue.length) {
              queueCount -= 1;
              execute(queue.shift());
              break;
          }
      }
  }
  
  for (const oneProgram of program) {
      while (oneProgram[1] > time && queueCount) {
          executeInQueues();
      }
      
      queueCount += 1;
      queues[oneProgram[0] - 1].push(oneProgram);
  }
  
  for (const queue of queues) {
      for (const queueProgram of queue) {
          execute(queueProgram);
      }
  }
  
  result[0] = time;
  
  return result;
}