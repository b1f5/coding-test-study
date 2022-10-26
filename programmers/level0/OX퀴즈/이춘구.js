/**
 * @param {string[]} quiz 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열
 * @returns {string[]} 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열
 */
function solution(quiz) {
  return quiz.map((q) => {
    // " = "를 기준으로 수식과 결과를 나눈다.
    const [expression, result] = q.split(" = ");
    // eval로 수식을 실행시키고 그 결과가 result와 같은지 판별해서 O 또는 X를 반환한다.
    return eval(expression) === parseInt(result) ? "O" : "X";
  });
}
