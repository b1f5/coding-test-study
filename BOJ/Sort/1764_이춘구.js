const [NM, ...names] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [unseenCount, unheardCount] = NM.split(" ").map(Number);
const unseen = names.slice(0, unseenCount);
const unheard = names.slice(unseenCount);

const [criteria, comparative] =
  unseenCount > unheardCount ? [unheard, unseen] : [unseen, unheard];

const criteriaObj = criteria.reduce((obj, v) => {
  obj[v] = true;
  return obj;
}, {});

const unseenUnheard = comparative.filter((cmp) => criteriaObj[cmp]).sort();
console.log(unseenUnheard.length + "\n" + unseenUnheard.join("\n"));
