function solution(people, limit) {
  let answer = 0;

  // 내림차순으로 정렬
  people = people.sort((a, b) => b - a);

  let [left, right] = [0, people.length - 1];

  let heavier = people[left];
  let lighter = people[right];
  while (left <= right) {
    // 내림차순으로 정렬한 people에서
    // 더 무거운 left의 무게와 더 가벼운 right의 무게를 더해줌
    // limit를 넘는다면, 더 무거운 사람 혼자만 탈 수 있으므로
    // left를 오른쪽으로 한칸 옮겨줌
    if (heavier + lighter > limit) {
      left += 1;
    }
    // 두 합이 limit 보다 가볍거나 같다면 같이 탈 수 있으므로,
    // left를 오른쪽으로 한칸, right를 왼쪽으로 한칸 옮겨줌
    else {
      left += 1;
      right -= 1;
    }

    answer += 1;

    // left와 right의 위치를 옮겨줬으므로 값 갱신
    heavier = people[left];
    lighter = people[right];
  }

  return answer;
}
