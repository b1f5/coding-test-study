// @ts-check
/**
 * @param {string[]} files 파일명 배열
 * @returns {string[]}
 */
function solution(files) {
  var answer = [];

  const pattern = /(\D+)(\d{1,5})(.*)/;

  let sortingFiles = files.map((file) => {
    const matching = file.match(pattern);

    const HEAD = matching?.[1] || "";
    const NUMBER = matching?.[2] || "";
    const TAIL = matching?.[3] || "";

    return [HEAD, NUMBER, TAIL];
  });

  const sortedFiles = sortingFiles.sort((a, b) => {
    const A = a[0].toUpperCase();
    const B = b[0].toUpperCase();

    if (A < B) return -1;
    if (A > B) return 1;

    const A_NUMBER = Number(a[1]);
    const B_NUMBER = Number(b[1]);

    if (A_NUMBER < B_NUMBER) return -1;
    if (A_NUMBER > B_NUMBER) return 1;

    return 0;
  });

  answer = sortedFiles.map((file) => file.join(""));

  return answer;
}

// ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);
// ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
);
