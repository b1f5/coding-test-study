function solution() {
  const USER = 'mrko';
  const FRIENDS = [
    ['donut', 'jun'],
    ['donut', 'andole'],
    ['donut', 'mrko'],
    ['shakevan', 'andole'],
    ['shakevan', 'jun'],
    ['shakevan', 'mrko'],
  ];
  const VISITORS = ['bedi', 'bedi', 'donut', 'bedi', 'shakevan'];

  // name을 key값으로 가지고, name과 친구인 list를 value로 가지는 object
  let relationObj = {};
  // score수를 저장하는 object
  let scoreObj = {};

  const ALL_USER = new Set(FRIENDS.flat());
  ALL_USER.add(...VISITORS);
  [...ALL_USER].forEach((USER) => {
    // USER에 대한 친구 list를 빈 배열로 초기화
    relationObj[USER] = [];
    // USER에 대한 점수 0으로 초기화
    scoreObj[USER] = 0;
  });

  FRIENDS.forEach((FRIEND) => {
    const [USER1, USER2] = FRIEND;

    relationObj[USER1].push(USER2);
    relationObj[USER2].push(USER1);
  });

  // 본인의 점수는 셀 필요 없기 때문에 object에서 delete
  delete scoreObj[USER];
  relationObj[USER].forEach((ALREADY_FREIND) => {
    // 이미 친구인 USER는 delete
    delete scoreObj[ALREADY_FREIND];
  });

  VISITORS.forEach((VISITOR) => {
    // 만약 VISITOR가 scoreObj에 존재한다면 점수 + 1
    // (이미 친구일 경우는 이미 삭제되서 object에 존재하지 않음)
    if (VISITOR in scoreObj) scoreObj[VISITOR] += 1;
  });

  for (key in scoreObj) {
    // 만약 같이 아는 USER면 중복되므로 제거됨
    let knowTogether = new Set();
    knowTogether.add(relationObj[USER]);
    knowTogether.add(relationObj[key]);

    // 중복 제거하지 말고 배열에 다 넣어줌
    let tmp = [...relationObj[USER], ...relationObj[key]];

    // 배열과 set의 사이즈의 차이가 중복된 수 이기 때문에
    // 그 수에 10을 곱한수가 score
    let score = (tmp.length - knowTogether.size) * 10;

    scoreObj[key] += score;
  }

  let result = [];
  result = Object.entries(scoreObj)
    .sort() // 이름순으로 정렬
    .sort((a, b) => b[1] - a[1]) // 점수순으로 정렬
    .filter((el, idx) => { // 0이 아니고 상위 5개인것만 filtering
      return el[1] !== 0 && idx < 5;
    })
    .map((el) => el[0]); // 이름만 출력

  console.log(result);
}

solution();
