function solution(citations) {
  let n = citations.length;
  citations.sort((a, b) => a - b); // 오름차순으로 정렬

  for (let i = 0; i < n; i += 1) {
    // 남은 인용 횟수들이 현재 인용 횟수 이상일 경우
    // 이미 정렬을 했기 때문에 남은 갯수로 판단 가능
    const H_INDEX = n - i;
    if (citations[i] >= H_INDEX) return H_INDEX;
  }

  return 0;
}
