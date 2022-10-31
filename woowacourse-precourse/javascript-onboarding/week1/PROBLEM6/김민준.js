function solution() {
  const FORMS = [
    ['jm@email.com', '제이엠'],
    ['jason@email.com', '제이슨'],
    ['woniee@email.com', '워니'],
    ['mj@email.com', '엠제이'],
    ['nowm@email.com', '이제엠'],
  ];

  // key를 NICKNAME으로 가지고, value를 EMAIL로 가지는 객체 생성
  const USER_EMAIL_OBJ = {};
  const SUB_NICKNAME_OBJ = {};
  let result = [];

  FORMS.forEach((FORM) => {
    // FORM의 정보를 EMAIL과 NICKNAME으로 분리
    const [EMAIL, NICKNAME] = FORM;
    USER_EMAIL_OBJ[NICKNAME] = EMAIL;

    NICKNAME.split('').forEach((_, idx) => {
      if (idx < NICKNAME.length - 1) {
        // 연속된 2글자 구하기
        const SUB_NICKNAME = NICKNAME.slice(idx, idx + 2);
        // 
        const PARENT_NICKNAME = SUB_NICKNAME_OBJ[SUB_NICKNAME];
        // 객체에 이미 SUB_NICKNAME의 부모 NICKNAME이 있고,
        // 그 부모 NICKNAME이 현재 NICKNAME이 아닐경우 
        if (PARENT_NICKNAME && PARENT_NICKNAME !== NICKNAME) {
          result.push(EMAIL);
          result.push(USER_EMAIL_OBJ[PARENT_NICKNAME]);
        }
        else SUB_NICKNAME_OBJ[SUB_NICKNAME] = NICKNAME;
      }
    });
  });

  console.log([...new Set(result)].sort());
}

solution();
