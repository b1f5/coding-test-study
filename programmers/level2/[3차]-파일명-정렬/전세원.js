function solution(files) {
  var answer = [];
  const namesHeadNumber = [];
  files.forEach((fileName, index) => {
    const lowerCaseName = fileName.toLowerCase();
    const reNum = /[0-9]/g;
    // const reString = /[a-z]/g;
    const reString = /[^0-9]/g;
    const numberIndex = lowerCaseName.search(reNum);
    const namesHead = lowerCaseName
      .slice(0, numberIndex)
      .match(reString)
      .join("");
    const exceptHead = lowerCaseName.slice(numberIndex);
    const stringIndex = exceptHead.search(reString);
    console.log(stringIndex);
    const namesNumber =
      stringIndex === -1
        ? Number(exceptHead.slice(0))
        : Number(exceptHead.slice(0, stringIndex));
    console.log(namesHead, namesNumber);
    const [name, head, number] = [fileName, namesHead, namesNumber];
    namesHeadNumber.push([name, head, number]);
  });
  const sortByHead = namesHeadNumber.sort((a, b) => {
    aHead = a[1];
    bHead = b[1];
    aNum = Number(a[2]);
    bNum = Number(b[2]);
    if (aHead > bHead) return 1;
    if (aHead < bHead) return -1;
    if (aHead === bHead) {
      if (aNum > bNum) return 1;
      if (aNum < bNum) return -1;
      return 0;
    }
  });
  sortByHead.forEach((element) => answer.push(element[0]));

  return answer;
}

// const files = [
//   "i mg1 2.png",
//   "i-mg10.png",
//   "i'mg02.png",
//   "im g1.png",
//   "I MG0mn1.GIF",
//   "im g2.JPG",
// ];

// const files = [
//   "F-5 Freedom Fighter",
//   "B-50 Superfortress",
//   "A-10 Thunderbolt II",
//   "F-14 Tomcat",
// ];

const files = ["O-00321", "O49qcGPHuRLR5FEfoO00321"];
console.log(solution(files));
