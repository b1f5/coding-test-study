let dictionary = new Map();

/**
 * A:1, B:1, ... , Z:26 으로 사전을 초기화하는 함수
 */
function initDictionary() {
  let alphabetList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  alphabetList.forEach((el, idx) => {
    dictionary.set(el, idx + 1);
  });
}

/**
 * 사전을 계속 업데이트 하면서 결과값을 반환하는 함수
 *
 * @param {string} msg
 * @returns
 */
function updateDictionary(msg) {
  let result = [];
  let [start, end] = [0, msg.length];

  let currentWord = '';
  let word = '';
  for (let i = 0; i < msg.length; i += 1) {
    // 입력값과 현재 사전에 있는지 검사한 단어와 같으면 break
    if (word === msg) break;
    for (let j = msg.length; j > i; j -= 1) {
      currentWord = msg.slice(start, end);

      // undefined, 공백 무시
      if (currentWord.length <= 0) continue;

      // 사전에 현재 단어가 없다면 있을 때 까지 end - 1 하고 continue
      if (dictionary.has(currentWord) === false) {
        end -= 1;
        continue;
      }

      // 사전에 현재 단어가 있다면 반환할 배열에 넣어줌
      result.push(dictionary.get(currentWord));
      // word 문자열에 현재까지 검사한 단어를 더해줌
      word += currentWord;

      // start에서 msg의 끝부터 길이를 -1하면서 검사했으므로,
      // 현재 단어가 있다면 다음 글자까지의 단어는 없어서 현재까지의 단어까지 왔다는 뜻이므로
      // 다음 글자까지의 단어를 사전에 넣어주어야 하므로 end + 1
      end += 1;
      currentWord = msg.slice(start, end);

      dictionary.set(currentWord, dictionary.size + 1);

      // 사전에 뽑아낸 길이 만큼 start를 이동시켜줌
      start += currentWord.length - 1;
      // 다시 끝부터 검사해야하므로 end를 msg의 맨 마지막으로 옮겨줌
      end = msg.length;

      break;
    }
  }

  return result;
}

function solution(msg) {
  initDictionary();
  let result = updateDictionary(msg);

  return result;
}