// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
const input = `9
0
12345678
1
2
0
0
0
0
32
`.toString().trim().split('\n').map(Number);

let answer = [];
let heap = [];


const swap = (a, b) => {
    [heap[a], heap[b]] = [heap[b], heap[a]];
} 

const heappush = (value) => {
    heap.push(value);

    let curindex = heap.length - 1;

    while(curindex > 0) {
        let parentIndex = Math.floor((curindex - 1) / 2);

        if(heap[parentIndex] <= heap[curindex]) break;
        swap(parentIndex, curindex);
        curindex = parentIndex;
    }
}

const heappop = () => {
    if(heap.length <= 1) heap = [];
    else heap[0] = heap.pop();

    let curindex = 0;
    let leftindex = curindex * 2 + 1;
    let rightindex = curindex * 2 + 2;

    if(!heap[leftindex]) return curindex;

    if(!heap[rightindex]) {
        if(heap[leftindex] < heap[curindex]) {
            swap(leftindex, curindex);
        }
    }

    while(heap[leftindex] < heap[curindex] || heap[rightindex] < heap[curindex]) {
        let minindex = heap[leftindex] > heap[rightindex]
            ? rightindex : leftindex;
        
        swap(minindex, curindex);

        curindex = minindex;
        leftindex = minindex * 2 + 1;
        rightindex = minindex * 2 + 2;
    }

}


for(let i=1; i<input[0]; i++) {
    if(heap.length < 1 && input[i] == 0) {
        answer.push(0);
    } else if (input[i] != 0) {
        heappush(input[i]);
    } else { 
        answer.push(min);
        heappop();
    }
}


console.log(answer.join('\n'));