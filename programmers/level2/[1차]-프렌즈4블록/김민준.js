/**
 * 2차원 배열을 받아서 오른쪽으로 90도 회전하는 함수
 * 
 * @param {number} row 행의 개수
 * @param {number} col 열의 개수
 * @param {(string | boolean)[][]} matrix 2차원 배열
 * @returns {(string | boolean)[][]} 오른쪽으로 90도 회전한 2차원 배열
 */
function rotate(row, col, matrix) {
  let result = [];
  for(let j=0; j<col; j+=1) {
    let tmp = [];
    for(let i=0; i<row; i+=1) {
      tmp.push(matrix[i][j]);
    }
    result.push(tmp.reverse());
  }

  return result;
}

/**
 * 현재 board를 받아서 지워질 개수를 반환하는 함수
 * 
 * @param {number} row 행의 개수
 * @param {string[][]} board 게임 판
 * @param {boolean[][]} isBlock 2*2 블록이면 true값을 가지는 2차원 배열 
 * @returns {number} 지워지는 개수
 */
function check(row, board, isBlock) {
  let result = 0;
  const DIR = {
    RIGHT: [0, 1],
    DOWN: [1, 0],
    RIGHT_DOWN: [1, 1],
  };
  let flag = true; // 2*2 블록이 완성될 수 있는지 판단하는 flag
  for(let i=0; i<row-1; i+=1) {
    for(let j=0; j<board[i].length - 1; j+=1) {
      flag = true;
      const CUR = board[i][j];
      for(const [ROW, COL] of Object.values(DIR)) {
        const [NEXT_ROW, NEXT_COL] = [i + ROW, j + COL];
        // 2*2 블록이 완성되지 못할 경우 break
        if(board[NEXT_ROW][NEXT_COL] !== CUR) {
          flag = false;
          break;
        }
      }
      // 2*2 블록이 완성될 경우
      if(flag) {
        // 현재 인덱스의 값을 true로 바꾸고
        isBlock[i][j] = true;
        // 오른쪽, 아래, 오른쪽아래의 값도 true로 바꿔줌
        for(const [ROW, COL] of Object.values(DIR)) {
          const [NEXT_ROW, NEXT_COL] = [i + ROW, j + COL];
          // 중복되어 이미 바뀐 값이라면 continue
          if(isBlock[NEXT_ROW][NEXT_COL] === true) continue;
          isBlock[NEXT_ROW][NEXT_COL] = true;
        }
      }
    }
  }

  // true의 값을 세서 answer에 더해줌
  for(let i=0; i<row; i+=1) {
    for(let j=0; j<isBlock[i].length; j+=1) {
      if(isBlock[i][j] === true) result += 1;
    }
  }

  return result;
}

/**
 * 2*2 블록을 지우는 함수
 * 
 * @param {number} row 행의 개수
 * @param {string[][]} board 게임 판
 * @param {boolean[][]} isBlock 2*2 블록이면 true값을 가지는 2차원 배열 
 */
function deleteBlock(row, board, isBlock) {
  // true값이 아닌, 즉 2*2 블록이 완성되지 않은것만 filter로 걸러줌
  for(let i=0; i<row; i+=1) {
    board[i] = board[i].filter((_, j) => {
      return isBlock[i][j] === false;
    });
    isBlock[i] = isBlock[i].filter(el => el === false);
  }
}

function solution(m, n, board) {
  let answer = 0;
  let [row, col] = [m, n];
  let isBlock = Array.from({ length: row }, () => new Array(col).fill(false));

  // 오른쪽으로 90도 회전
  board = rotate(row, col, board);
  isBlock = rotate(row, col, isBlock);
  // 90도 회전으로 인해 행과 열이 서로 바뀜
  [row, col] = [n, m];

  let deletedCount = check(row, board, isBlock);
  
  // 지워지는 개수가 0이 될때까지, 즉 지워지는 것이 없을때까지 반복
  while(deletedCount) {
    answer += deletedCount;
    deleteBlock(row, board, isBlock);
    deletedCount = check(row, board, isBlock);
  }

  return answer;
}