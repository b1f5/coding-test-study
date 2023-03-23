// @ts-check
/**
 * 수집된 개인정보 중 유효기간이 지나 파기해야 하는 개인정보의 번호를 반환하는 함수
 * @param {string} today 오늘 날짜
 * @param {string[]} terms 약관과 그 유효기간
 * @param {string[]} privacies 수집된 개인정보의 정보
 * @returns {number[]} 파기해야할 개인 정보의 번호
 */
function solution(today, terms, privacies) {
  const DAYS_PER_MONTH = 28;
  const MONTHS_PER_YEAR = 12;

  const answer = [];

  // 약관 종류별 유효기간 기록
  const validityTerms = terms.reduce((obj, term) => {
    const [type, validityTerm] = term.split(" ");
    return { ...obj, [type]: Number(validityTerm) };
  }, {});

  /**
   * 시작연도(2000)로부터 특정 날짜(date)까지의 일수를 계산하는 함수
   * @param {string} date 날짜
   */
  function daysTill(date) {
    const BEGINNING = 2000;
    const [year, month, day] = date.split(".").map(Number);

    return (
      ((year - BEGINNING) * MONTHS_PER_YEAR + month) * DAYS_PER_MONTH + day
    );
  }

  // 오늘까지의 일수
  const daysTillToday = daysTill(today);

  privacies.forEach((privacy, index) => {
    const [collectionDate, type] = privacy.split(" ");
    // 유효일수
    const validDays = validityTerms[type] * DAYS_PER_MONTH - 1;
    // 수집일까지의 일수
    const daysTillCollection = daysTill(collectionDate);
    // 만료일까지의 일수
    const daysTillExpiration = daysTillCollection + validDays;
    // 만료일까지의 일수가 오늘까지의 일수보다 작다면 유효기간이 지난 것이다.
    if (daysTillExpiration < daysTillToday) answer.push(index + 1);
  });

  return answer;
}
