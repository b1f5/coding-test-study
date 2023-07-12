
const input = `
11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14
`.toString().trim().split('\n');

let len = Number(input[0]);
let arr = [];
for(let i=1; i<input.length; i++){
    arr.push(Number(input[i].split(' ')));
}
arr = arr.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
// console.log(arr);

let answer = 1;
let endtime = arr[0][1];
for(let i=1; i<arr.length; i++){
    if(arr[i][0] >= endtime) {
        endtime = arr[i][1];
        answer++;
    }
}

console.log(answer);