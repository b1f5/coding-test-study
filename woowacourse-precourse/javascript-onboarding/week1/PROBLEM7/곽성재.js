function problem7(user, friends, visitors) {
  var answer;
  const usersFriends = [];
  // 1) 유저의 친구목록을 만듭니다
  usersFriends.push(...findUsersFriend(friends, user));

  // 2) 유저의 친구의 친구목록을 만듭니다
  let relation = [];
  for (const usersFriend of usersFriends) {
    relation.push(...findUsersFriend(friends, usersFriend));
  }
  // prettier-ignore
  relation = relation.filter((nickname) => nickname !== user);

  // 문제발생) 유저도 결국 그들의 친구여서 중복되는 현상 발생
  // 문제해결 1) 다음단계로 가기 전에 _지금단계에서_ 유저를 배열에서 지우는거 [o]
  // 문제해결 2) 마지막(계산)직전에, 유저를 객체에서 지우는거 [x]

  // 3) 친구추천리스트를 객체롤 만듭니다. 점수를 저장하기 위해서
  const recommendList = {};
  for (const may_know of relation) {
    if (recommendList[may_know] === undefined) {
      recommendList[may_know] = 10;
    } else if (recommendList[may_know]) {
      recommendList[may_know] += 10;
    }
  }

  for (const visitor of visitors) {
    if (usersFriends.includes(visitor)) {
      continue;
    } else if (recommendList[visitor] === undefined) {
      recommendList[visitor] = 1;
    } else if (recommendList[visitor]) {
      recommendList[visitor] += 1;
    }
  }

  answer = Object.entries(recommendList);
  // 0보다 작은경우 앞에꺼가 먼저옵니다 - 오름차순
  // 0보다 큰경우 뒤에꺼가 먼저옵니다 - 내림차순
  // 0이면 아무런걸 안해줍니다
  // 점수를 기준으로 내림차순 정렬이 기본입니다
  // 동점이라면 닉네임순으로 정렬합니다.
  answer.sort((a, b) => {
    if (b[1] - a[1] === 0) {
      return a[0] > b[0] ? 1 : -1;
    }
    return b[1] - a[1];
  });

  // 최대 5명만을 리턴합니다
  if (answer.length >= 5) {
    return answer.splice(0, 5);
  }
  return answer;
}

function findUsersFriend(friends, user) {
  const result = [];
  friends.forEach((relation) => {
    const IDX_USER = relation.indexOf(user); // 0, 1    -1
    if (IDX_USER !== -1) {
      result.push(relation[1 - IDX_USER]);
    }
  });
  return result;
}

console.log(
  problem7(
    "mrko",
    [
      ["donut", "jun"],
      ["donut", "andole"],
      ["donut", "mrko"],
      ["shakevan", "jun"],
      ["shakevan", "andole"],
      ["shakevan", "mrko"],
      ["jayss", "donut"],
      ["aa", "donut"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  )
);
