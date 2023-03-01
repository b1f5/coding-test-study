// @ts-check
/**
 * @param {number[]} progresses
 * @param {number[]} speeds
 * @returns {number[]}
 */
function solution(progresses, speeds) {
  const answer = [];

  let currProgresses = [...progresses];
  let currSpeeds = [...speeds];

  while (true) {
    if (currProgresses.length === 0) break;

    let nextProgresses = currProgresses.map(
      (progress, i) => progress + currSpeeds[i]
    );
    let completedTaskCount = 0;

    while (true) {
      if (nextProgresses.length === 0 || nextProgresses[0] < 100) {
        if (completedTaskCount > 0) answer.push(completedTaskCount);
        break;
      }

      nextProgresses = nextProgresses.slice(1);
      currSpeeds = currSpeeds.slice(1);
      completedTaskCount += 1;
    }

    currProgresses = nextProgresses;
  }

  return answer;
}
