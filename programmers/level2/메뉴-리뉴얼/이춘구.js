// @ts-check
/**
 * @param {string[]} orders 단품메뉴들이 문자열 형식으로 담긴 배열
 * @param {number[]} course 추가하고 싶어하는 코스요리를 구성하는 단품메뉴들의 갯수가 담긴 배열
 * @returns {(string | undefined)[]} 새로 추가하게 될 코스요리의 메뉴 구성을 문자열 형태로 담은 배열
 */
function solution(orders, course) {
  const answer = [];

  // 후보 코스요리들을 만든다.
  const possibleCourse = makePossibleCourse(orders, course);

  // 후보 코스요리들 중 가장 많이 주문된 코스만 골라낸다.
  const maxCourses = pickMaxCourses(possibleCourse);

  // 가장 많이 주문된 코스들을 뽑아 answer 배열에 담는다.
  Object.values(maxCourses).forEach(({ list }) => {
    answer.push(...list);
  });

  // 오름차순 정렬해서 반환한다.
  return answer.sort();
}

/**
 * @param {string[]} orders
 * @param {number[]} course
 * @returns {{} | {string: number}}
 */
function makePossibleCourse(orders, course) {
  const possibleCourse = {};

  for (const order of orders) {
    for (const count of course) {
      // 단일메뉴의 갯수가 구성하려는 메뉴 수보다 적으면 스킵한다.
      if (order.length < count) continue;
      // 가능한 모든 코스 후보를 구한다.
      const candidates = combinateOrder(order, count);

      // 후보 코스가 중복된 횟수를 기록한다.
      for (const candidate of candidates) {
        possibleCourse[candidate] = (possibleCourse[candidate] || 0) + 1;
      }
    }
  }

  return possibleCourse;
}

/**
 * 손님이 주문한 단품메뉴들로 만들 수 있는 코스요리들의 조합을 만드는 함수
 * @param {any} order 손님들이 주문한 단품메뉴들이 담긴 배열
 * @param {number} selectCount 골라서 조합할 단품메뉴의 개수
 * @returns {string[] | string[][]}
 */
function combinateOrder(order, selectCount) {
  const dishes = order instanceof Array ? order : order.split("");
  const combinations = [];

  if (selectCount === 1) return dishes.map((dish) => [dish]);

  dishes.forEach((fixed, index) => {
    const rest = dishes.slice(index + 1);
    const restCombinations = combinateOrder(rest, selectCount - 1);
    const attached = restCombinations.map((restCombination) =>
      // 오름차순 정렬하고 join한다.
      [fixed, ...restCombination].sort().join("")
    );

    combinations.push(...attached);
  });

  return combinations;
}

/**
 * 각 주문횟수가 제일 많은 조합의 코스요리를 골라내는 함수
 * @param {{} | {string: number}} courses 코스요리별 주문횟수가 담긴 객체
 * @returns {{} | {string :{list: string[], count: number}}}
 */
function pickMaxCourses(courses) {
  const maxCourses = {};

  for (const [course, count] of Object.entries(courses)) {
    // 주문 횟수가 2보다 적으면 스킵한다.
    if (count < 2) continue;

    // 현재 코스를 이루는 단일메뉴의 갯수를 구한다.
    const courseLength = course.length;

    // key에 현재 코스의 단일메뉴의 갯수가 존재한다면
    if (maxCourses.hasOwnProperty(courseLength)) {
      // 현재까지의 최대 주문 횟수를 구한다.
      const currentMaxCount = maxCourses[courseLength].count;

      // 주문횟수가 현재 최대 주문 횟수보다 크다면 갱신하고,
      if (count > currentMaxCount) {
        maxCourses[courseLength] = { list: [course], count };
      } else if (count === currentMaxCount) {
        // 아니라면 기존의 목록에 추가한다.
        maxCourses[courseLength].list.push(course);
      }
    } else {
      // 존재하지 않으면 새로 넣어준다.
      maxCourses[courseLength] = { list: [course], count };
    }
  }

  return maxCourses;
}
