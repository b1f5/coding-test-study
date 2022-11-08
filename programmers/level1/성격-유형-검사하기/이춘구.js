function solution(survey, choices) {
  // 각 성격유형별 점수를 0으로 초기화한 객체를 만든다.
  const pointOfType = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  // 각 선택지별 점수를 기록한 객체를 만든다.
  const pointOfChoice = { 1: 3, 2: 2, 3: 1, 5: 1, 6: 2, 7: 3 };

  // survey에 담긴 각 지표를 순회한다.
  survey.forEach((types, index) => {
    // 현재 지표를 비동의 성격유형과 동의 성격유형으로 나눈다.
    const [disagree, agree] = types.split("");
    // 현재 지표에 대한 검사자의 선택지를 할당한다.
    const choice = choices[index];

    // 선택지가 4보다 작으면 비동의, 크면 동의 쪽 성격유형의 점수에 선택지의 점수를 더한다.
    if (choice < 4) pointOfType[disagree] += pointOfChoice[choice];
    if (choice > 4) pointOfType[agree] += pointOfChoice[choice];
  });

  // 성격유형별 점수가 기록된 객체를 배열로 만들어 순회한다.
  const resultType = Object.entries(pointOfType).reduce(
    (result, currentType, index, array) => {
      // 짝수번째 인덱스의 요소가 아니라면 넘어간다.
      if (index % 2 !== 0) return result;

      // 현재 요소와 다음 요소를 성격유형과 점수로 분리한다.
      const [leftType, leftPoint] = currentType;
      const [rightType, rightPoint] = array[index + 1];

      // 왼쪽 성격유형의 점수와 오른쪽 성격유형의 점수를 비교해서 높은 쪽을 선택한다.
      // 동점이라면 왼쪽 성격유형을 선택한다.(오름차순 정렬되어 있으므로)
      const chosenType = leftPoint >= rightPoint ? leftType : rightType;

      // 이전 문자열의 뒤에 현재 성격유형 문자열을 붙인다.
      return result + chosenType;
    },
    ""
  );

  return resultType;
}
