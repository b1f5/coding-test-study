function solution(word) {
  let result = 0;
  const ALPHABET_LIST = ['A', 'E', 'I', 'O', 'U'];
  const COUNT_TO_CHANGE_LIST = [781, 156, 31, 6, 1];

  result = word.split('').reduce((acc, cur, idx) => {
    return acc + ALPHABET_LIST.indexOf(cur) * COUNT_TO_CHANGE_LIST.at(idx) + 1;
  }, 0);

  return result;
}
