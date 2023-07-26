const fs = require('fs');

const filePath = './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(args) {
  const [noSoundPeopleLength, _noSeePeopleLength] = args[0].split(' ').map((el) => Number(el));

  const noSoundPeople = new Set([...args.slice(1, noSoundPeopleLength + 1)]);
  const bothPeople = new Set();

  for (let i = noSoundPeopleLength + 1; i < args.length; i += 1) {
    const person = args[i];

    if (noSoundPeople.has(person)) {
      bothPeople.add(person);
      noSoundPeople.delete(person);
    }
  }

  console.log(`${bothPeople.size}\n${[...bothPeople].sort().join('\n')}`);
}

solution(input);
