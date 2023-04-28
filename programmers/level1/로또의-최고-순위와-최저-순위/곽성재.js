function solution(lottos, win_nums) {
  let matchCnt = 0;
  let zeroCnt = 0;
  lottos.forEach((v, i) => {
    if (v === 0) zeroCnt++;
    for (const num of win_nums) {
      if (v === num) matchCnt++;
    }
  });
  return [
    7 - matchCnt - zeroCnt === 7 ? 6 : 7 - matchCnt - zeroCnt,
    7 - matchCnt === 7 ? 6 : 7 - matchCnt,
  ];
}
