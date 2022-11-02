let forms = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
];
let nickOverlapList = new Set(); // 중복된 닉네임만 모아둔 배열
//닉네임들 모아둔 배열
let nickArray = [];
for (let i = 0; i < forms.length; i++) {
  nickArray.push(forms[i][1]);
}
//solution 진행시.한명씩 순회를 돌면서 이메일 유효성 검사 및 닉네임 검사를 하게 됨
function problem6(forms) {
  for (crew of forms) {
    let crewEmail = crew[0];
    let crewNickName = crew[1];
    nicknameValid(crewNickName);
    function nicknameValid(koreanNickname) {
      if (emailValid(crewEmail) && checkKoreanOnly(crewNickName)) {
        let splitKoreanNick = koreanNickname.split("");
        for (let i = 0; i < splitKoreanNick.length - 1; i++) {
          for (eachNick of nickArray) {
            if (
              //자기자신을 비교하지 않고, 한글자라도 겹쳤을시
              eachNick !== koreanNickname &&
              eachNick.includes(splitKoreanNick[i])
            ) {
              // indexof 찾기 위해 닉 배열의 요소를 또 split한다.
              let splitEachNick = eachNick.split("");
              //첫번째 중복되는 글자를 찾고.. 그 글자의 index를 찾는다.
              let firstOverlap = splitEachNick.indexOf(`${splitKoreanNick[i]}`);
              if (splitEachNick[firstOverlap + 1] === splitKoreanNick[i + 1]) {
                nickOverlapList.add(crewEmail);
              }
            }
          }
        }
      }
    }
  }
  //마지막 이메일 반환하기 위한 단계
  let result = [...nickOverlapList];
  var answer = result.sort();
  return answer;
}

function emailValid(email) {
  if (11 <= email.length < 20 && email.includes("@email.com")) {
    let splitEmail = email.split("@email.com");
    if (splitEmail[0].length > 1 && splitEmail[1] == "") {
      return true;
    }
  } else {
    result.push(email);
  }
}
//한글로만 이루어져 있는지 확인하는 함수(완료)
function checkKoreanOnly(koreanChar) {
  if (koreanChar == null) return false;
  for (let i = 0; i < koreanChar.length; i++) {
    let c = koreanChar.charCodeAt(i);
    if (!((0xac00 <= c && c <= 0xd7a3) || (0x3131 <= c && c <= 0x318e))) {
      return false;
    }
  }
  return true;
}

console.log(problem6(forms));
