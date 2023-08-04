const input = `
5 3
5 4 3 2 1
1 3
2 4
5 5
`.toString().trim().split('\n');
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let number = input[1].split(' ').map(Number);
let renumber = [0];
    
for (let i = 0; i < N; i++) {
    renumber[i+1] = renumber[i] + number[i];  // dp
}

let answer = [];

for(let i=2; i<M+2; i++) {
    let [start, end] = input[i].split(' ').map(Number);
    // let nn = number.slice(start-1, end);
    // let nn = number.filter((value, index) => {
        // return start-1 <= index && index < end });
    // let summ = nn.reduce((acc, cur) => {return acc += cur});
    let summ = renumber[end] - renumber[start-1];
    answer.push(summ)
}


console.log(answer.join('\n'));
