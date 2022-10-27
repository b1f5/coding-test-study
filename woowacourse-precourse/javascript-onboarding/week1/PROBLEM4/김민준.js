function solution() {
  const WORD = "I love you"; // "R olev blf"
  const LOWER_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const UPPER_ALPHABET = LOWER_ALPHABET.toUpperCase();

  let result = '';
  WORD.split('').map((el) => {
    if(LOWER_ALPHABET.includes(el)) {
      let index = LOWER_ALPHABET.indexOf(el) * -1 - 1;
      result += LOWER_ALPHABET.at(index);
    }
    else if(UPPER_ALPHABET.includes(el)) {
      let index = UPPER_ALPHABET.indexOf(el) * -1 - 1;
      result += UPPER_ALPHABET.at(index);
    }
    else result += el;
  });

  return result;
}

const RESULT = solution();
console.log(RESULT);