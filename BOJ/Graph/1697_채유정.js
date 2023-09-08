// const [N, K] = `
// 5 17
// `.toString().trim().split(' ').map(Number);
const fs = require('fs');
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let visited = Array.from({length:100001}, () => 0);
let queue = [[N, 0]];

while(queue.length > 0) {
    let [node, count] = queue.shift();

    if(visited[node] === 1) {
        continue;
    }

    visited[node] = 1;

    if(node == K) {
        console.log(count);
        break;
    }

    for (const move of [node + 1, node - 1, node * 2]) {
        if (visited[move] == 0 &&
            move >= 0 &&
            move <= 100000) {
            queue.push([move, count+1]);
        }
    }

    // console.log(queue);
}
    
