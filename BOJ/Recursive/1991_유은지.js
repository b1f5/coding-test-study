const [input_n, ...ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input_n;
const arr = ARR.map((v) => v.split(' '));

const map = new Map();

arr.forEach(([parent, left, right]) => {
  map.set(parent, [left, right]);
});

let res = '';

// 전위 순회(루,왼,오)
const preorder = (node) => {
  if (node === '.') return;

  const [left, right] = map.get(node);

  res += node;
  preorder(left);
  preorder(right);
};

// 중위 순회(왼,루,오)
const inorder = (node) => {
  if (node === '.') return;

  const [left, right] = map.get(node);

  inorder(left);
  res += node;
  inorder(right);
};

// 후위 순회(왼,오,루)
const postorder = (node) => {
  if (node === '.') return;

  const [left, right] = map.get(node);

  postorder(left);
  postorder(right);
  res += node;
};

preorder('A');
res += '\n';
inorder('A');
res += '\n';
postorder('A');

console.log(res);
