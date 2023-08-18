const input = `
3
3
ENTJ INTP ESFJ
4
ESFP ESFP ESFP ESFP
5
INFP INFP ESTP ESTJ ISTJ
`.toString().trim().split('\n');
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let T = Number(input[0]) * 2;
let answer = [];

for (let i = 1; i < T; i+=2) {
    let people = Number(input[i]);
    let mbti = input[i+1].split(' ');
    let diff = 0;
    
    let setMbti = new Set(mbti);
    let uniqueMbti = [...setMbti]; // 중복제거
    let one = uniqueMbti[0].split('');
    
    let obj = {
        "E" : 0,
        "I" : 0,
        "N" : 0,
        "S" : 0,
        "F" : 0,
        "T" : 0,
        "P" : 0,
        "J" : 0,
    }
    
    for(let j = 0; j < uniqueMbti.length; j++) {   
        if (uniqueMbti.length <= 1) {
            answer.push(diff);
            break;
        }
        console.log(uniqueMbti[j]);
        
        for(let x = 0; x<4; x++) {
            let aa = uniqueMbti[j].split('')[x];
            obj[aa]++;
        //     if(one[x] != uniqueMbti[j].split('')[x]) {
        //         diff++;
        //     }
        }      
    }
    if(obj["E"] > obj["I"]) {
        diff += obj["I"];
    } else if(obj["E"] < obj["I"]){
        diff += obj["E"];
    }
    if(obj["N"] > obj["S"]) {
        diff += obj["S"];
    } else if(obj["N"] < obj["S"]){
        diff += obj["N"];
    }
    if(obj["T"] > obj["F"]) {
        diff += obj["F"];
    } else if(obj["T"] < obj["F"]){
        diff += obj["T"];
    }
    if(obj["P"] > obj["J"]) {
        diff += obj["J"];
    } else if(obj["P"] < obj["J"]){
        diff += obj["P"];
    }
    
    answer.push(diff);
}

console.log(answer.join('\n'));