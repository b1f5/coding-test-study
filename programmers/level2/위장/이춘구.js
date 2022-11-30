// @ts-check
/**
 * @param {string[][]} clothes 의상들이 담긴 2차원 배열
 * @returns {number} 서로 다른 옷의 조합의 수
 */
function solution(clothes) {
  // 주어진 2차원 배열을 카테고리별 의상의 개수를 기록한 객체로 변환한다.
  const wardrobe = clothes.reduce((wardrobe, [_, category]) => {
    // 현재 카테고리에 의상이 없으면 0 있으면 1을 더한다.
    wardrobe[category] = (wardrobe[category] || 0) + 1;

    return wardrobe;
  }, {});

  // 의상의 개수만 뽑아서 배열을 만든다.
  const clothesCounts = Object.values(wardrobe);
  // 카테고리별 의상의 개수가 a, b일 때, 총 조합의 개수는
  // 한가지 씩만 입는 경우인 (a + b)와 둘을 조합해서 입는 경우인 ab를 더한 (a + b) + ab개이다.
  // 마찬가지로 카테고리별 의상의 개수가 a, b, c일 때, 총 조합의 개수는
  // (a + b + c) + (ab + bc + ca) + abc개이다.
  // (한가지씩) + (두가지 씩 조합) + (세가지 씩 조합)
  // 형식을 보면 3차 방정식 (x + a)(x + b)(x + c)의 계수라는 걸 알 수 있다.
  // 이때 미지수 x의 값은 필요없으므로 1을 대입하면,
  // (1 + a)(1 + b)(1 + c) = 1 + (a + b + c) + (ab + bc + ca) + abc이 되므로
  // 1을 좌항으로 넘겨 계산하면 원하는 값(총 조합의 개수)를 구할 수 있다.
  const totalCaseCount =
    clothesCounts.reduce((total, count) => total * (count + 1), 1) - 1;

  return totalCaseCount;
}
