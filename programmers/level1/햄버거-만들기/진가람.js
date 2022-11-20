function kmpSearch(ingredient) {
  const order = [1, 2, 3, 1]; // 빵 야채 고기 빵
  const pi = getPartialMatch(order.join(''));

  let count = 0;
  let begin = 0;
  let matched = 0;

  while (begin <= ingredient.length - order.length) {
    if (
      matched < order.length &&
      ingredient[begin + matched] === order[matched]
    ) {
      if (++matched === order.length) {
        count++;
        ingredient.splice(begin, 4);
        matched = 0;
        begin -= 3;
      }
    } else {
      if (matched === 0) begin++;
      else {
        begin += matched - pi[matched - 1];
        matched = pi[matched - 1];
      }
    }
  }
  return count;
}

function getPartialMatch(iter) {
  const pi = new Array(iter.length).fill(0);
  let begin = 1;
  let matched = 0;

  while (begin + matched < iter.length) {
    if (iter[begin + matched] === iter[matched]) {
      matched++;
      pi[begin + matched - 1] = matched;
    } else {
      if (matched === 0) begin++;
      else {
        begin += matched - pi[matched - 1];
        matched = pi[matched - 1];
      }
    }
  }
  return pi;
}
