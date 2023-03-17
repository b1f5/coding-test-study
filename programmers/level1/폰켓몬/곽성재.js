function solution(nums) {
  const MAX = nums.length / 2;
  const set1 = new Set(nums);
  const board = {};
  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    board[el] = board[el] === undefined ? 1 : board[el] + 1;
  }
  console.log(Object.keys(board));
  console.log(board);
  return Object.keys(board).length > MAX ? MAX : Object.keys(board).length;
  return set1.size > MAX ? MAX : set1.size;
}

console.log(solution([1, 2, 3, 4, 5, 1, 1, 1, 2, 2, 2, 2, 2, 3]));
