function solution(babbling) {
  var answer = 0;
  const input = { ...babbling };
  const inputWords = Object.values(input);
  const ableBabbling = ["aya", "ye", "woo", "ma"];
  //똑같은 소리를 반복해서 낼 수 없다.
  const repeatUnable = [];
  for (let able_A of ableBabbling) {
    repeatUnable.push(`${able_A}${able_A}`);
  }
  //순회를 돌면서 검증해준다.
  inputWords.forEach((element) => {
    //똑같은 소리를 두번 낸다면.. false
    if (validateReapeat(element) === element) {
      return false;
    } else {
      //다 발음할 수 있는지 체크
      let result = validateBabbling(element);
      if (result.match(/[a-z]/g)) {
        return false;
      } else {
        answer += 1;
      }
    }
  });
  //만약에 똑같은 소리를 반복해서 낸다면..
  function validateReapeat(element) {
    for (unable of repeatUnable) {
      if (element.includes(unable)) {
        return element;
      }
    }
  }

  function validateBabbling(element) {
    while (
      element.includes("aya") ||
      element.includes("ye") ||
      element.includes("ma") ||
      element.includes("woo")
    ) {
      for (able of ableBabbling) {
        if (element.includes(able)) {
          //0으로 처리하는 것은 ""로 처리하면 안된다.
          //mwooa 같은 경우 ma만 남을시 정답이라고 처리되는 것을 막기 위해
          element = element.replace(able, "0");
        }
      }
    }
    return element;
  }
  return answer;
}
