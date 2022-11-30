/*
어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h번 이상이고 
나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 반환값다.

인용 횟수를 요소로 가진 배열을 받지만, 핵심은 h의 최댓값은 절대 논문 전체의 개수를 넘을 수 없다.
따라서 논문의 개수 범주 내에서 찾아야 한다.
*/
function solution(citations) {
  // 최대값을 빠르게 찾기위해 내림차순 순회
  for (let h = citations.length; h >= 0; h--) {
    let count = citations.filter((el) => el >= h).length; // h번 이상 인용된 논문의 개수
    if (h <= count) return h; // h번 이상 인용된 논문이 h번 이상이라면 해당 값 반환
  }
}

console.log(solution([0, 0, 0, 0]));
