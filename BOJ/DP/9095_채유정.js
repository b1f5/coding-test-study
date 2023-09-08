const input = `
3
4
7
10
`.toString().trim().split('\n').map(Number);

let arr = [0];
arr[1] = 1;
arr[2] = 2;
arr[3] = 4;
arr[4] = 7;

for(let i = 4; i<11; i++) {
    arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
}

let answer = [];

for(let j=1; j<=input[0]; j++) {
    answer.push(arr[input[j]]);
}

console.log(answer.join('\n'));