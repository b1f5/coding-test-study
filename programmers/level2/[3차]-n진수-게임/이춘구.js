// @ts-check
/**
 * @param {number} n 진법
 * @param {number} t 미리 구할 숫자의 갯수
 * @param {number} m 게임에 참가하는 인원
 * @param {number} p 튜브의 순서
 * @returns {string} 튜브가 말해야 하는 숫자를 공백 없이 차례대로 나타낸 문자열
 */
function solution(n, t, m, p) {
  // 말해야 하는 숫자들을 담을 배열
  const numbers = [];
  // 마지막으로 말해야 하는 숫자까지의 전체 갯수는 m*(t-1)+p
  const totalCount = m * (t - 1) + p;

  // 말해야 하는 숫자는 0에서 시작한다.
  let startNumber = 0;
  // 전체 갯수를 넘어갈 때까지 숫자를 1씩 증가시키며 진법 변환시켜서 더한다.
  while (numbers.length < totalCount) {
    const currentLength = numbers.length;
    let currentNumbers = startNumber.toString(n).toUpperCase().split("");

    // 전체 갯수를 넘어가면 넘어가는 요소는 제거하고 더한다.
    if (currentLength + totalCount > totalCount)
      currentNumbers = currentNumbers.slice(0, totalCount - currentLength);

    numbers.push(...currentNumbers);
    startNumber += 1;
  }

  // 요소의 인덱스를 참여 인원 수로 나눈 값이 츄브의 순서 - 1과 같은 값들만 모아서 문자열로 만들고 반환한다.
  return numbers.filter((_, index) => index % m === p - 1).join("");
}
