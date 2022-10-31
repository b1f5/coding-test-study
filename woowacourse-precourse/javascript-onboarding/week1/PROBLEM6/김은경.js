function problem6(forms) {
  const duplicated = [];

  forms.forEach((target, targetIndex) => {
    const [targetEmail, targetNickName] = target;
    // 유효성 검사에서 true를 리턴받을 경우,
    if (isValid(targetEmail, targetNickName)) {
      // 이미 처음부터 순회를 했기 때문에, 비교기준의 인덱스 +1 이름부터 비교
      for (let i = targetIndex + 1; i < forms.length; i++) {
        // 비교기준인 이름이 3글자라면, 문자열을 2글자씩 잘라내 비교하므로
        // j = 0, 1 : [제이], [이엠]
        for (let j = 0; j < targetNickName.length - 1; j++) {
          // 닉네임들 forms[i][1]을 순회하면서 비교기준의 잘라낸 문자열을 가지고 있다면s
          if (forms[i][1].includes(targetNickName.slice(j, j + 2))) {
            // 비교기준 닉네임의 이메일과, 비교대상 닉네임의 이메일을 푸시
            duplicated.push(targetEmail, forms[i][0]);
            break;
          }
        }
      }
    }
  });
  // set 객체로 중복을 제거한 뒤 정렬
  const result = [...new Set(duplicated)].sort();
  return result;
}

function isValid(targetEmail, targetNickName) {
  const valPattern_nickName = /^[가-힣]{1,19}$/;
  const valPattern_email = /^[a-zA-Z0-9]{1,9}(?=\@email\.com)/;

  if (
    valPattern_nickName.test(targetNickName) && // 닉네임은 한글 1자 이상 20자 미만
    valPattern_email.test(targetEmail) // 이메일은 @email.com형식으로 11자 이상 20자 미만
  ) {
    return true;
  } else {
    console.log('Please check your information');
    return false;
  }
}
console.log(
  problem6([
    ['jm@email.com', '제이엠'],
    ['jason@email.com', '제이슨'],
    ['woniee@email.com', '워니'],
    ['mj@email.com', '엠제이'],
    ['nowm@email.com', '이제엠'],
  ])
);
