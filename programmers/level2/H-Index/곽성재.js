function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => b - a); // 최댓값을 찾으면 break하려고

  let cited = citations[0]; // 가장 많이 인용된 값에서부터 시작할 예정(결국 최대값을 찾으면 break하려고)

  while (cited >= 0) {
    let countOfMoreCited = 0;
    for (let j = 0; j < citations.length; j++) {
      const target = citations[j];
      if (target >= cited) {
        countOfMoreCited += 1;
      } else if (target < cited) {
        break;
      }
    }
    if (cited <= countOfMoreCited) {
      answer = cited;
      break;
    }
    cited -= 1;
  }
  return answer;
}

// 0번 인용이 된다면?!
// h는 꼭 citations의 요소일 필요 없다
