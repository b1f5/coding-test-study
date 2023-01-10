// @ts-check
/**
 * 메시지를 자르고 매번 처음부터 탐색하는 방식의 풀이
 * @param {string} msg 압축할 문자열
 * @returns {number[]} 압축한 후의 사전 색인 번호 배열
 */
function solution(msg) {
  let message = msg;
  const indexNumbers = [];
  const dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // 문자열의 길이가 0이 될 때까지 반복한다.
  while (message.length !== 0) {
    const messageLength = message.length;
    // 현재 문자열의 제일 첫번째 한 글자를 현재 입력값으로 한다.
    let currW = message[0];
    // 현재 입력값의 색인 번호를 구한다.
    let currIndexNumber = dictionary.indexOf(currW) + 1;

    // 남은 문자열의 길이가 1이라면
    if (messageLength === 1) {
      // 현재 색인 번호를 배열에 넣고
      indexNumbers.push(currIndexNumber);
      // 색인 번호 배열을 반환한다.
      return indexNumbers;
    }

    for (let i = 1; i < messageLength; i += 1) {
      // 현재 입력값에 다음 입력값을 붙이고 그 색인 번호를 구한다.
      const nextW = currW + message[i];
      const nextIndexNumber = dictionary.indexOf(nextW) + 1;

      // 그 색인 번호가 사전에 있고,
      if (nextIndexNumber !== 0) {
        // 더이상 탐색할 문자열이 남이있지 않다면
        if (nextW.length === messageLength) {
          // 색인 번호를 배열에 넣고 반환한다.
          indexNumbers.push(nextIndexNumber);
          return indexNumbers;
        }
        // 아니라면 다음 입력값과 그 색인 번호를 저장한다.
        currW = nextW;
        currIndexNumber = nextIndexNumber;
      } else {
        // 그 색인 번호가 사전에 없다면,
        // 사전에 추가하고, 색인 번호를 배열에 넣고,
        // 이전 입력값의 길이만큼 문자열을 자른다.
        dictionary.push(nextW);
        indexNumbers.push(currIndexNumber);
        message = message.slice(currW.length);
        break;
      }
    }
  }

  return indexNumbers;
}

/**
 * 이중 포인터를 이용한 풀이 (위 풀이보다 빠름)
 * @param {string} msg 압축할 문자열
 * @returns {number[]} 압축한 후의 사전 색인 번호 배열
 */
function solution(msg) {
  const messageLength = msg.length;
  // 메시지의 마지막 인덱스 === 포인터들의 최댓값
  const lastIndex = messageLength - 1;
  // 사전
  const dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // 이중 포인터 시작점과 끝점
  let start = 0;
  let end = 0;
  // 탐색 이전의 입력 문자열과 색인 번호
  let prevW = "";
  let prevIndex = 0;

  // 색인 번호들을 담을 배열
  const indexNumbers = [];

  while (true) {
    // 현재 포인터들을 기준으로 현재 입력값으로 쓸 문자열을 잘라낸다.
    const currW = msg.slice(start, end + 1);
    // 사전에서 현재 입력값의 색인 번호를 찾는다.
    const currIndex = dictionary.indexOf(currW) + 1;

    // 시작 포인터와 끝 포인터가 마지막에 도달했다면
    // 마지막 한 글자짜리 입력값이라는 뜻이므로
    if (start === lastIndex && end === lastIndex) {
      // 현재 색인 번호를 색인 번호 배열에 넣고 종료한다.
      indexNumbers.push(currIndex);
      break;
    }

    // 현재 입력값이 사전에 존재하고,
    if (currIndex !== 0) {
      // 끝 포인터가 최댓값에 도달해서
      // 더이상 탐색할 문자열이 남아있지 않다면,
      if (end === lastIndex) {
        // 현재 색인 번호를 색인 번호 배열에 넣고 종료한다.
        indexNumbers.push(currIndex);
        break;
      }
      // 현재 입력값이 사전에 존재하고,
      // 아직 탐색할 문자열이 남아있다면
      // 현재 입력값을 이전 입력값에 저장하고
      prevW = currW;
      // 현재 색인 번호를 이전 색인 번호에 저장하고
      prevIndex = currIndex;
      // 끝 포인터를 1 증가시킨다.
      end += 1;
    } else {
      // 존재하지 않는다면,
      // 현재 입력값을 사전에 추가하고
      dictionary.push(currW);
      // 이전 색인 번호를 배열에 추가하고
      indexNumbers.push(prevIndex);
      // 시작 포인터를 이전 입력값의 길이만큼 증가시킨다.
      start += prevW.length;
    }
  }

  return indexNumbers;
}
