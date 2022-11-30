function solution(citations) {
  let n = citations.length;
  citations.sort((a, b) => a - b); // 오름차순으로 정렬

  for (let i = 0; i < n; i += 1) {
    const H_INDEX = n - i;
    if (citations[i] >= H_INDEX) return H_INDEX;
  }

  return 0;
}
