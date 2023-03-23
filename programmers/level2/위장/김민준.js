function solution(clothes) {
  let answer = 1;
  let clothKindObj = {};
  
  // 해당 옷을 입었을 경우 +1 을 해줌
  // 해당 옷을 입지 않았을 경우를 default로 1로 설정
  // 만약 headgear: 2 라면, 한 가지의 headgear와 headgear를 쓰지 않았을 경우로 총 2가 됨
  for(const [_, KIND] of clothes) {
      clothKindObj[KIND] = (clothKindObj[KIND] || 1) + 1;
  }
  
  // 올 수 있는 경우의 수를 다 곱해서 구해줌
  answer = Object.values(clothKindObj).reduce((acc, cur) => acc * cur, 1);
  
  // 곱하는 수에 착용하지 않는 경우의 수도 포함되어 있기 때문에,
  // 모두 착용하지 않았을 경우의 수 1을 빼줌
  return answer - 1;
}