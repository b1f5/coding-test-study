const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [_, ...inputs] = input;

const nodes = inputs.map((v) => v.split(" "));
const trees = {};
nodes.forEach(([node, left, right]) => {
  trees[node] = { leftNode: left, rightNode: right };
});

// 재귀는 무한 루프에 빠지기 쉬우니, 호출조건 혹은 리턴을 잘 써야 한다
let answer = "";

// (루트) (왼쪽 자식) (오른쪽 자식)
function preorder(node) {
  const { leftNode, rightNode } = trees[node];
  answer += node;
  if (leftNode !== ".") preorder(leftNode);
  if (rightNode !== ".") preorder(rightNode);
}

// (왼쪽 자식) (루트) (오른쪽 자식)
function inorder(node) {
  const { leftNode, rightNode } = trees[node];
  if (leftNode !== ".") inorder(leftNode);
  answer += node;
  if (rightNode !== ".") inorder(rightNode);
}

// (왼쪽 자식) (오른쪽 자식) (루트)
function postorder(node) {
  const { leftNode, rightNode } = trees[node];
  if (leftNode !== ".") postorder(leftNode);
  if (rightNode !== ".") postorder(rightNode);
  answer += node;
}

// 루트는 항상 A
preorder("A");
answer += "\n";
inorder("A");
answer += "\n";
postorder("A");

console.log(answer);
