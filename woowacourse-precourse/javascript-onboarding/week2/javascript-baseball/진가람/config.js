module.exports.RANDOM_NUMBER = {
  from: 1,
  to: 9,
  pick: 3,
};

module.exports.SIGN = {
  restart: 1,
  close: 2,
};

module.exports.MATCH_STATUS = {
  exact: '스트라이크',
  has: '볼',
  notFound: '낫싱',
  goal: '3스트라이크',
};

module.exports.LINES = {
  on_progress: '숫자를 입력해주세요 : ',
  final:
    '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
};
