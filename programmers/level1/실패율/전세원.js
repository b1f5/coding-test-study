function solution(N, stages){
    const stageNumber = N;
    const peopleOnStage = [...stages];
    const failureRate = [];

    for(let i=1; i <= stageNumber; i++){
        const thisStageRate = {};
        let passedPerson = 0;
        let failedPerson = 0;

        for(personOnStage of peopleOnStage){
            if(personOnStage >= i){
                passedPerson += 1;
            }
            if(personOnStage === i){
                failedPerson += 1;
            }
        }

        const thisStageFailureRate = (failedPerson / passedPerson).toFixed(20);
        thisStageRate["number"] = i;
        thisStageRate["value"] = thisStageFailureRate;
        failureRate.push(thisStageRate);
    }

    failureRate.sort(function (a, b) {
        if (a.value > b.value) {
        return -1;
        }
        if (a.value < b.value) {
            return 1;
        }
        return 0;
    });

    const answer = failureRate.map(function(obj){
        return obj.number;
    })

    return answer;
}


const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

solution(N, stages);