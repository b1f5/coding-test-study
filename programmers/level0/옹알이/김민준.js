function solution(babblingList) {
  const POSSIBLE_LIST = ['aya', 'ye', 'woo', 'ma'];
  let result = [];

  for (let babbling of babblingList) {
    for (const POSSIBLE of POSSIBLE_LIST) {
      babbling = babbling.replaceAll(`${POSSIBLE}${POSSIBLE}`, 'X');
      babbling = babbling.replaceAll(POSSIBLE, '');
    }

    result.push(babbling);
  }

  console.log(result);
  return result.filter((el) => el === '').length;
}
