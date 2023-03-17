function getOperatorPermutationList(OP_LIST, num) {
  let result = [];

  if (num === 1) return OP_LIST.map((el) => [el]);

  OP_LIST.forEach((fixed, idx) => {
    let rest = [...OP_LIST.slice(0, idx), ...OP_LIST.slice(idx + 1)];
    let permutationList = getOperatorPermutationList(rest, num - 1);
    let attached = permutationList.map((el) => [fixed, ...el]);

    result.push(...attached);
  });

  return result;
}

function solution(expression) {
  let result = [];
  const OP_LIST = ['+', '-', '*'];

  const OP_PERMUTATION_LIST = getOperatorPermutationList(OP_LIST, 3);

  let seperatedExpression = '';
  OP_PERMUTATION_LIST.forEach((OP_PERMUTATION) => {
    seperatedExpression = expression.split(/(\D)/);
    
    OP_PERMUTATION.forEach((OP) => {
      while (true) {
        if (seperatedExpression.includes(OP) === false) break;

        let idx = seperatedExpression.indexOf(OP);
        let calcResult = eval(
          seperatedExpression.slice(idx - 1, idx + 1 + 1).join('')
        );
        seperatedExpression.splice(idx - 1, 3, calcResult);
      }
    });
    result.push(Math.abs(...seperatedExpression));
  });

  return Math.max(...result);
}

const expression = '100-200*300-500+20';
const result = solution(expression);
console.log(result);
