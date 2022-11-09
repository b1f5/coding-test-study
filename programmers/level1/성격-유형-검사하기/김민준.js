function solution(survey, choices) {
  let result = '';

  const TYPE = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i += 1) {
    const [DISAGREE, AGREE] = survey[i];
    const CHOICE = choices[i];

    if (CHOICE > 4) TYPE[AGREE] += CHOICE - 4;
    else if (CHOICE < 4) TYPE[DISAGREE] += 4 - CHOICE;
  }

  result += TYPE['R'] >= TYPE['T'] ? 'R' : 'T';
  result += TYPE['C'] >= TYPE['F'] ? 'C' : 'F';
  result += TYPE['J'] >= TYPE['M'] ? 'J' : 'M';
  result += TYPE['A'] >= TYPE['N'] ? 'A' : 'N';

  return result;
}
