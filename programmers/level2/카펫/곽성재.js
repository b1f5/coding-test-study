function solution(brown, yellow) {
  // 4) yellow === 1인 케이스는 for loop을 못돌아서 따로 더해줌
  if (yellow === 1) {
    return [3, 3];
  }
  for (let i = 1; i <= yellow / 2; i += 1) {
    if (yellow % i === 0) {
      // 1) 1부터 순회를 시작하고, 작은 값이 세로값이 된다
      const innerHeight = i;
      const innerWidth = yellow / i;

      // 2) 갈색 카펫은 1줄이라고 명시되었으므로, 필연적으로 +2한 값이 된다
      const outerHeight = innerHeight + 2;
      const outerWidth = innerWidth + 2;
      if (outerWidth * outerHeight === brown + yellow) {
        // 3) 총 가로세로를 곱하면 카펫의 총 개수가 나올테니 이를 리턴
        return [outerWidth, outerHeight];
      }
    }
  }
}
