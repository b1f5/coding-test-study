function isValidIndex(board, index) {    
  // 빈칸이면 true, 아니라면 false return
  return board[index] === 0;
}

function solution(board) {
  const ROW = board.length;
  const COL = board[0].length;
  
  board = board.flat();
  
  let bombIndexList = [];
  board.map((el, idx) => {
      if(el === 1) bombIndexList.push(idx);
  });
  
  // 전부 다 지뢰인 경우
  if(bombIndexList.length === ROW * COL) return 0;
  
  // 지뢰가 없는 경우
  if(bombIndexList.length === 0) return ROW * COL;
  
  // 그 외
  for(let bombIndex of bombIndexList) {
      let dangerIndexList = [bombIndex];
      // (지뢰 - 1) 인덱스가 마지막 열의 인덱스가 아닐 경우
      // = (지뢰 - 1)의 인덱스가 이전의 행으로 넘어가지 않을 경우
      if((bombIndex - 1) % COL !== (COL - 1)) dangerIndexList.push(bombIndex - 1);
      // (지뢰 + 1) 인덱스가 첫번째 열의 인덱스가 아닐 경우
      // = (지뢰 + 1)의 인덱스가 다음 행으로 넘어가지 않을 경우
      if((bombIndex + 1) % COL !== 0) dangerIndexList.push(bombIndex + 1);
      
      dangerIndexList.map(el => {
          dangerIndexList.push(el - COL, el + COL); 
      });
      
      dangerIndexList = dangerIndexList.filter(el => isValidIndex(board, el));
      
      dangerIndexList.map(el => {
         board[el] = 'X'; 
      });
  }
  
  return board.filter(el => el === 0).length;
}