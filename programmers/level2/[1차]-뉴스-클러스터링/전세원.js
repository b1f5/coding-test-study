function solution(str1, str2) {
  let answer = 0;
  const slicedStr1 = sliceTwoChar(str1);
  const slicedStr2 = sliceTwoChar(str2);
  function sliceTwoChar(headLine) {
    const temp = [];
    for (let i = 0; i < headLine.length - 1; i++) {
      if (
        headLine[i].match(/^[a-zA-Z]*$/) &&
        headLine[i + 1].match(/^[a-zA-Z]*$/)
      ) {
        const slicedChar = headLine.slice(i, i + 2);
        temp.push(slicedChar.toLowerCase());
      }
    }
    return temp;
  }
  const intersection = [];
  const copySlicedStr2 = [...slicedStr2];
  slicedStr1.forEach((element) => {
    if (copySlicedStr2.includes(element)) {
      intersection.push(element);
      const indexFound = copySlicedStr2.indexOf(element);
      copySlicedStr2[indexFound] = "";
    }
    // console.log(`복사본: ${copySlicedStr2}`);
  });
  if (intersection.length !== 0) {
    const sumOfSets =
      slicedStr1.length + slicedStr2.length - intersection.length;
    const cal = Math.floor((intersection.length / sumOfSets) * 65536);
    answer = cal;
  } else if (slicedStr1.length === 0 && slicedStr2.length === 0) {
    answer = 65536;
  } else {
    anwer = 0;
  }
  return answer;
}

const str1 = "FRANCE";
const str2 = "french+";

console.log(solution(str1, str2));
