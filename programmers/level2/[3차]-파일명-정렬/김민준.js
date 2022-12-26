/**
 * 파일명을 인자로 받아 HEAD를 반환하는 함수
 * 
 * @param {string} file 파일명
 * @returns {string} HEAD
 */
function getHead(file) {
  let head = '';

  let current = '';
  for (let i = 0; i < file.length; i += 1) {
    current = file[i];
    // 숫자가 나올 경우 break
    if (parseInt(current) >= 0 && parseInt(current) <= 9) break;

    head += current;
  }

  return head;
}

/**
 * 파일명을 인자로 받아 NUMBER를 반환하는 함수
 * 
 * @param {string} file 파일명
 * @returns {number} NUMBER
 */
function getNumber(file) {
  let number = '';

  let current = '';
  for (let i = 0; i < file.length; i += 1) {
    current = file[i];
    // 숫자인 경우에만 number에 문자열로 더해줌
    if (parseInt(current) >= 0 && parseInt(current) <= 9) {
      number += current;
    }

    // 숫자 외의 문자가 나온다면 break
    else break;
  }

  return parseInt(number);
}

// /**
//  * 파일명을 받아 TAIL을 반환하는 함수
//  * 
//  * @param {string} file 
//  * @returns {string} TAIL
//  */
// function getTail(file) {
//   return file;
// }

function solution(files) {
  files = files.sort((file1, file2) => {
    // 대,소문자 구분 없이 정렬하기 위해 소문자로 통일
    file1 = file1.toLowerCase();
    file2 = file2.toLowerCase();

    const [HEAD1, HEAD2] = [getHead(file1), getHead(file2)];
    // 이미 HEAD는 각각 구했으므로 빈 문자열로 치환
    file1 = file1.replace(HEAD1, '');
    file2 = file2.replace(HEAD2, '');

    const [NUMBER1, NUMBER2] = [getNumber(file1), getNumber(file2)];
    // 이미 NUMBER는 각각 구했으므로 빈 문자열로 치환
    file1 = file1.replace(NUMBER1, '');
    file2 = file2.replace(NUMBER2, '');

    // const [TAIL1, TAIL2] = [getTail(file1), getTail(file2)];

    // a < b => return -1
    // a > b => return 1
    // a === b => return 0

    // HEAD1가 HEAD2보다 사전순으로 앞에 온다면 return -1
    if(HEAD1 < HEAD2) return -1;
    // HEAD1가 HEAD2보다 사전순으로 뒤에 온다면 return 1
    if(HEAD1 > HEAD2) return 1;

    // NUMBER1이 NUMBER2보다 작다면 return -1
    if(NUMBER1 < NUMBER2) return -1;
    // NUMBER1이 NUMBER2보다 크다면 return 1
    if(NUMBER1 > NUMBER2) return 1;

    // HEAD와 NUMBER가 모두 같을 경우 순서 그대로 반환해야 하므로 return 0
    return 0;
  });

  return files;
}