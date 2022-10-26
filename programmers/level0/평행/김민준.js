function solution(dots) {
  let gradientList = new Set();
  let dotsCombinationLength = 0;

  for (let i = 0; i < dots.length - 1; i += 1) {
    let [x1, y1] = dots[i];
    for (let j = i + 1; j < dots.length; j += 1) {
      let [x2, y2] = dots[j];
      let gradient = (y2 - y1) / (x2 - x1);

      gradientList.add(gradient);

      dotsCombinationLength += 1;
    }
  }

  let gradientListLength = gradientList.size;

  return gradientListLength === dotsCombinationLength ? 0 : 1;
}
