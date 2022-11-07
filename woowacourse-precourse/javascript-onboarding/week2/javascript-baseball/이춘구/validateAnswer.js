/**
 * 사용자가 입력한 값의 유효성을 검사하는 함수
 * @param {string} answer 사용자의 입력값
 * @returns {boolean} 유효성
 */
function validateAnswer(answer) {
  // const regex = /^(?!.*(.).*\1)\d{3}$/;
  // const isValid = regex.test(answer);
  const LENGTH = 3;
  const isNumbers = /^[1-9]+$/.test(answer);
  const isThreeDigits = answer.length === LENGTH;
  const isUnique = new Set(answer).size === LENGTH;

  if (isNumbers && isThreeDigits && isUnique) return true;
  return false;
}

module.exports = validateAnswer;
