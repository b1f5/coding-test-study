function problem5(forms) {
  let answer = new Set();
  // forms에서 비교군과, 중복 닉네임을 가진 유저를 빼나간다
  // 비교는 항상 0번째의 유저와 하며, shift로 0번째 유저가 교체되어 나간다
  while (forms.length > 1) {
    const nickname = forms[0][1];
    const email = forms[0][0];
    // console.log("누구와 비교중?", nickname);

    // 임시공간에 0번째의 유저의 닉네임을 2글자로 쪼갠 문자열을 넣는다
    const temp = [];
    for (let i = 0; i < nickname.length - 1; i++) {
      temp.push(nickname[i] + nickname[i + 1]);
    }
    // 1번째 유저부터 비교를 해나간다
    // 중복이 발견되면 즉시 중단하고 빼내므로, 지금으로는 이 방법이 제일 적지 않을까 생각중
    for (let j = 1; j < forms.length; j++) {
      const nicknameForCompare = forms[j][1];
      // console.log(nicknameForCompare, "UP");

      for (const twoLetters of temp) {
        if (nicknameForCompare.includes(twoLetters)) {
          // console.log(nicknameForCompare, "DOWN");

          const emailOfDuplicate = forms[j][0];
          answer.add(emailOfDuplicate);
          answer.add(email);

          // nicknameForCompare는 중복이 안될리라고 예상(스플라이스 되니까)
          forms.splice(j, 1);
          // 탐색하는 인덱스를 더하지않고 그 자리에 그대로 두기
          j--;
          // 하나라도 발견하면 answer에 더해주고, 탐색을 중지
          break;
        }
      }
    }
    forms.shift();
  }
  // set을 배열로 전환
  // 문자열 오름차순 정렬
  answer = [...answer].sort();
  return answer;
}

// 1) 19글자(최대의 경우임)를 순서대로라고 했으니, 두글자씩 앞에서부터 쪼갬
// 2) 임시 배열에 넣어둔다
// 3) 인클루드를 써서 나머지 9999개의 문자열(최대의 경우임)과 비교한다
// 4) 중복판단된건 원본 배열에서 빼버리고 어딘가에 넣어둔다

console.log(
  problem5([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);
