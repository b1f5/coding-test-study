function solution(survey, choices) {
  // 각 타입별 점수를 0으로 초기화한 객체를 만든다.
  const pointOfType = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  // 각 선택지별 점수를 기록한 객체를 만든다.
  const pointOfChoice = { 1: 3, 2: 2, 3: 1, 5: 1, 6: 2, 7: 3 };

  // survey를 순회하며
  survey.forEach((types, index) => {
    // 현재 지표를 비동의 유형과 동의 유형으로 나눈다.
    const [disagree, agree] = types.split("");
    // 현재 지표에 대해 검사자가 선택한 선택지를 할당한다.
    const choice = choices[index];

    // 선택지가 4보다 작으면 비동의, 크면 동의 쪽 타입의 점수를 선택지의 점수만큼 올린다.
    if (choice < 4) pointOfType[disagree] += pointOfChoice[choice];
    if (choice > 4) pointOfType[agree] += pointOfChoice[choice];
  });

  // 성격유형별 점수가 기록된 객체를 배열로 만들어 순회한다.
  const resultType = Object.entries(pointOfType).reduce(
    (result, currentType, index, array) => {
      // 짝수번째 인덱스가 아니라면 넘어간다.
      if (index % 2 !== 0) return result;

      // 현재 성격유형과 다음 인덱스의 성격유형을 유형과 점수로 분리한다.
      const [leftType, leftPoint] = currentType;
      const [rightType, rightPoint] = array[index + 1];

      // 왼쪽 타입의 점수와 오른쪽 타입의 점수를 비교해서 높은 쪽을 선택한다.
      // 동점이라면 왼쪽 타입을 선택한다.(오름차순 정렬되어있으므로)
      const chosenType = leftPoint >= rightPoint ? leftType : rightType;

      // 이전 문자열의 뒤에 현재 성격유형 문자열을 붙인다.
      return result + chosenType;
    },
    ""
  );

  return resultType;
}
