const input = `
5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR
`.toString().trim().split('\n');
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let N = Number(input.shift());
let rect = input.map(a => a.split(''));

let visited = new Array(N).fill(false).map(() => new Array(N).fill(false));

let cnt = 0;
let cnt2 = 0;
const answer = [];
const dx=[-1, 0, 1, 0];
const dy=[0, 1, 0, -1];

function dfs(x,y, color) {
    visited[x][y] = true;
    for (let k=0; k<4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if(nx >= 0 && ny >= 0 && nx < N && ny < N && rect[nx][ny] === color && !visited[nx][ny]){
            dfs(nx, ny, color);
        }
    }
}

for (let i=0; i<N; i++) {
    for (let j=0; j<N; j++) {
        if (!visited[i][j]) {
            cnt++;
            dfs(i,j, rect[i][j]);
        }
    }
}
answer.push(cnt);

visited = new Array(N).fill(false).map(() => new Array(N).fill(false));

for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        if(rect[i][j] == 'R') rect[i][j] = 'G';
    }
}

for (let i=0; i<N; i++) {
    for (let j=0; j<N; j++) {
              
        if (!visited[i][j]) {
            cnt2++;
            dfs(i,j, rect[i][j]);
        }
    }
}
answer.push(cnt2);

console.log(answer.join(' '));
