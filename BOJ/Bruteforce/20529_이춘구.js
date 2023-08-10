const [T, ...cases] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const answer = [];

for (let i = 1; i < Number(T) * 2; i += 2) {
  const MBTIs = cases[i].split(" ");
  const MBTIsLength = MBTIs.length;

  if (MBTIsLength > 16 * 2) {
    answer.push(0);
    continue;
  }

  // 학생 중 3명을 고르는 모든 경우의 수 구하기
  const combinations = makeCombinations(MBTIs, 3);
  // 각 경우의 심리적 거리 구해서 배열에 저장
  const distances = combinations.map((combination) =>
    calculateTotalPsychologicalDistance(combination)
  );
  // 심리적 거리 중 최솟값 구해서 answer 배열에 저장
  answer.push(Math.min(...distances));
}

function makeCombinations(MBTIs, count) {
  const results = [];
  if (count === 1) return MBTIs.map((MBTI) => [MBTI]);

  MBTIs.forEach((fixed, index, originalArray) => {
    const rest = originalArray.slice(index + 1);
    const restCombinations = makeCombinations(rest, count - 1);
    const combined = restCombinations.map((comb) => [fixed, ...comb]);
    results.push(...combined);
  });

  return results;
}

function calculateTotalPsychologicalDistance(threeMBTIs) {
  let currIdx = 0;
  let totalPsychologicalDistance = 0;

  while (currIdx < 3) {
    const currMBTI = threeMBTIs[currIdx];
    for (let j = currIdx + 1; j < 3; j += 1) {
      totalPsychologicalDistance += calculatePsychologicalDistance(
        currMBTI,
        threeMBTIs[j]
      );
    }

    currIdx += 1;
  }

  return totalPsychologicalDistance;
}

// 두 MBTI를 합치고 Set으로 중복을 제거해 심리적 거리를 계산
// 두 MBTI가 3개가 동일하면 Set의 길이를 5가 되고 심리적 거리는 5 - 4 = 1
function calculatePsychologicalDistance(a, b) {
  return Array.from(new Set(a + b)).length - 4;
}

console.log(answer.join("\n"));
