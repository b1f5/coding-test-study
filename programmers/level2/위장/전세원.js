//옷의 종류당 몇벌이 있는지 구한다. -> reduce로 구하기
//옷 종류당 갯수가 숫자가 된다 {안경: 2, 아우터: 3}
//조합 알고리즘을 이용한다.
//옷 종류 수에 따라 조합알고리즘을 적용시킨다.
//나온 조합끼리 곱해서.. 다 더한다.

const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

// function solution(clothes) {
//   var answer = 0;
//   //옷 종류만 담겨있음.
//   const typeOfClothes = [];
//   for (let i = 0; i < clothes.length; i++) {
//     const [name, type] = clothes[i];
//     typeOfClothes.push(type);
//   }

//   //갯수 세주는 함수
//   const typesAndNumbers = clothes.reduce(
//     (typesAndNumbers, [_, clothesType]) => {
//       // 현재 카테고리에 의상이 없으면 0 있으면 1을 더한다.
//       typesAndNumbers[clothesType] = (typesAndNumbers[clothesType] || 0) + 1;
//       return typesAndNumbers;
//     },
//     {}
//   );
//   console.log(typesAndNumbers);
//   // 옷 종류 : 그 옷 종류가 몇벌 있는지를 담고 있는 객체

//   const type = Object.keys(typesAndNumbers);
//   //옷 종류 갯수

//   //배열중 몇개 뽑을지 정해주면 조합 뽑아주는 함수
//   const getCombinations = function (arr, selectNumber) {
//     const results = [];
//     if (selectNumber === 1) return arr.map((el) => [el]);
//     // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

//     arr.forEach((fixed, index, origin) => {
//       const rest = origin.slice(index + 1);
//       // 해당하는 fixed를 제외한 나머지 뒤
//       const combinations = getCombinations(rest, selectNumber - 1);
//       // 나머지에 대해서 조합을 구한다.
//       const attached = combinations.map((el) => [fixed, ...el]);
//       //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
//       results.push(...attached);
//       // 배열 spread syntax 로 모두다 push
//     });

//     return results; // 결과 담긴 results return
//   };

//   const combinationArray = [];
//   //모든 조합들이 다 감기는 배열
//   for (let i = 1; i <= type.length; i++) {
//     combinationArray.push(...getCombinations(type, i));
//     //(2, 1)(2, 2) -> 이렇게 구함
//   }
//   console.log(combinationArray);

//   combinationArray.forEach((array) => {
//     console.log(array);
//     let multiple = array.reduce(
//       (total, val) => total * typesAndNumbers[val],
//       1
//     );
//     //순회를 돌며 각 배열안에 있는 옷종류를 typesAndNumbers에서 value를 찾아서 곱해준다.
//     console.log(multiple);
//     answer += multiple;
//   });
//   return answer;
// }

function solution(clothes) {
  let answer = 0;
  const typesAndNumbers = clothes.reduce(
    (typesAndNumbers, [_, clothesType]) => {
      // 현재 카테고리에 의상이 없으면 0 있으면 1을 더한다.
      typesAndNumbers[clothesType] = (typesAndNumbers[clothesType] || 1) + 1;
      return typesAndNumbers;
    },
    {}
  );

  const amountOfClothes = Object.values(typesAndNumbers);
  answer += amountOfClothes.reduce((acc, cur) => acc * cur) - 1;
  return answer;
}
