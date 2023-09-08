function solution(input_string) {
  const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const memo = new Array(alphabetArr.length).fill(0);
  
  let beforeAlphabet = null;
  
  for (const str of input_string) {
      if (str !== beforeAlphabet) {
          const targetIndex = alphabetArr.findIndex(el => el === str);
          memo[targetIndex] += 1;
      }
      beforeAlphabet = str;
  }
  
  const filteredMemo = memo.map((el, idx) => ({ value: el, index: idx })).filter(el => ![0, 1].includes(el.value));
  
  if (!filteredMemo.length) return 'N';
  
  return filteredMemo.reduce((acc, cur) => {
      return acc + alphabetArr[cur.index];
  }, '');
}