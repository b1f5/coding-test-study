// 중복을 가시적으로 확인하기 위해 발음 가능한 단어를 해당 단어의 위치(인덱스)로 치환한다.
// 숫자로 이뤄지지 않았거나, 숫자가 연속한다면 조건에 부합하지 않은 것이다.
function solution(babbling) {
  const canPronounce = ['aya', 'ye', 'woo', 'ma'];

  for (let i = 0; i < canPronounce.length; i++) {
    babbling = babbling.map((b) => b.split(canPronounce[i]).join(i));
  }
  return babbling.filter((el) => !(isNaN(el) || isRepeat(el))).length;
}

function isRepeat(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) return true;
  }
  return false;
}

console.log(solution(['ayaye', 'uuu', 'yewooyewoo', 'yemawoo', 'ayaayaa']));
