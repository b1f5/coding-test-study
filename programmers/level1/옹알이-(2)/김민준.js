function isPossible(babbling) {
  // 가능한 발음 리스트
  const possibleList = ['aya', 'ye', 'woo', 'ma'];

  // 가능한 발음 리스트에 있는 발음이라면 해당 인덱스로 바꿔줌
  possibleList.forEach((el, idx) => {
    babbling = babbling.replaceAll(el, idx);
  });

  for (let i = 0; i < babbling.length; i += 1) {
    // 연속된 발음이라면 false
    if (babbling[i] === babbling[i + 1]) return false;
    // 숫자로 안바뀐 발음이 있다면 false
    if (isNaN(babbling[i])) return false;
  }

  return true;
}

function solution(babblingList) {
  let answer = 0;

  // true만 세어줌
  answer = babblingList.filter((babbling) => isPossible(babbling)).length;

  return answer;
}
