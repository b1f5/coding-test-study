// 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값
// 모두 공집합일 경우 1
function solution(str1, str2) {
  const a = alphaOnlyList(str1.toUpperCase());
  const b = alphaOnlyList(str2.toUpperCase());

  if (a.length === 0 && b.length === 0) return 1 * 65536;

  const intersection = getIntersection(setMap(a), setMap(b));
  const union = a.length + b.length - intersection;

  return parseInt((intersection / union) * 65536);
}

// ----------------------------------------------------------------
function setMap(arr) {
  const res = new Map();
  arr.forEach((key) => {
    res.set(key, (res.get(key) || 0) + 1);
  });
  return res;
}

function getIntersection(mapA, mapB) {
  if (mapA.size > mapB.size) {
    return getIntersection(mapB, mapA);
  }

  let res = 0;
  for (let key of mapA.keys()) {
    if (mapB.has(key)) {
      res += Math.min(mapA.get(key), mapB.get(key));
    }
  }
  return res;
}

function alphaOnlyList(str) {
  let result = [];
  for (let i = 0; i < str.length - 1; i++) {
    if (!(isAlphabet(str[i]) && isAlphabet(str[i + 1]))) continue;
    result.push(`${str[i]}${str[i + 1]}`);
  }
  return result;
}

function isAlphabet(el) {
  return 65 <= el.charCodeAt() && el.charCodeAt() <= 90;
}
