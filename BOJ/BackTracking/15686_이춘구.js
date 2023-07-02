const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [_, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((v) => v.split(" ").map(Number));

const SYMBOL = {
  empty: 0,
  house: 1,
  chiken: 2,
};

const houseCoords = [];
const chikenCoords = [];

// 집과 치킨집의 좌표 기록
map.forEach((r, i) => {
  r.forEach((c, j) => {
    if (c === SYMBOL.chiken) chikenCoords.push([i, j]);
    else if (c === SYMBOL.house) houseCoords.push([i, j]);
  });
});

// 생존하도록 선택된 치킨집인지 확인하기 위한 불리언 배열
const isPickedChikens = new Array(chikenCoords.length).fill(false);
const totalDistances = [];

function backTrack(index, pickedChikenCount) {
  // 치킨집 M개만큼 선택됐으면 거리 계산 들어가기
  if (pickedChikenCount === M) {
    const pickedChikens = [];
    isPickedChikens.forEach((isPickedChiken, i) => {
      if (isPickedChiken) pickedChikens.push(chikenCoords[i]);
    });

    totalDistances.push(calculateTotalDistance(houseCoords, pickedChikens));
    return;
  }

  for (let i = index; i < isPickedChikens.length; i += 1) {
    // 이미 선택된 치킨집이면 다음 i로 계속
    if (isPickedChikens[i]) continue;

    // 현재 치킨집 선택
    isPickedChikens[i] = true;
    backTrack(i, pickedChikenCount + 1);
    // 현재 치킨집 선택 취소
    isPickedChikens[i] = false;
  }
}

backTrack(0, 0);

function calculateDistance([r1, c1], [r2, c2]) {
  return Math.abs(r1 - r2) + Math.abs(c1 - c2);
}

function calculateTotalDistance(houseCoords, chikenCoords) {
  // 각 집마다 제일 가까운 치킨집과의 거리 구해서 모두 더하기
  return houseCoords.reduce((currTotalDistance, houseCoord) => {
    const distances = [];
    for (let i = 0; i < chikenCoords.length; i += 1) {
      const distance = calculateDistance(houseCoord, chikenCoords[i]);
      distances.push(distance);
      // 거리가 1이면 이미 최소이므로 더이상의 계산 불필요
      if (distance === 1) break;
    }

    return currTotalDistance + Math.min(...distances);
  }, 0);
}

console.log(Math.min(...totalDistances));
