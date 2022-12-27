function solution(files) {
  files = files.map((el) => splitToThree(el));
  files.sort(function (a, b) {
    const lowA = a[0].toLowerCase();
    const lowB = b[0].toLowerCase();
    const numA = Number(a[1]);
    const numB = Number(b[1]);
    if (lowA > lowB) return 1;
    if (lowA < lowB) return -1;
    if (numA > numB) return 1;
    if (numA < numB) return -1;
    return 0;
  });
  return files.map((el) => el.join(""));
}

function splitToThree(str) {
  // const reg = /[0-9]/; // 이렇게하면 단일값
  // const reg = /[0-9]+/; // 얘도 됨
  const reg = /\d+/;
  const idx = str.match(reg).index;
  const HEAD = str.substring(0, idx);
  const NUMBER = str.match(reg)[0]; // '123'
  // prettier-ignore
  // const TAIL = str.substring(str.indexOf(NUMBER[NUMBER.length - 1]) + 1, str.length);
  const TAIL = str.substring(idx + NUMBER.length, str.length);

  return [HEAD, NUMBER, TAIL];
}
