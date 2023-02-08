function solution (expression) {
    const preprocessing = splitExpression(expression);
    const operators = preprocessing[1];
    const calculateExpression = preprocessing[0];
    const everyOperatorAble = getPermutations(operators, operators.length);

    const total = [];
    everyOperatorAble.forEach(operatorArray => {
        let copyExpression = [...calculateExpression];
        operatorArray.forEach(operator => calculate(operator, copyExpression))
        total.push(Math.abs(copyExpression));
        }
    )


    function calculate(operator, array){
        while(array.indexOf(operator) !== -1){
            const indexOfOperator = array.indexOf(operator);
            let calculated;

            if (operator === "-") {
                calculated = Number(array[indexOfOperator-1]) - Number(array[indexOfOperator+1]);
            };
            if (operator === "+") {
                calculated = Number(array[indexOfOperator-1]) + Number(array[indexOfOperator+1]);
            };
            if (operator === "*") {
                calculated = Number(array[indexOfOperator-1]) * Number(array[indexOfOperator+1]);
            };

            array.splice(indexOfOperator-1, 3, calculated);
        }
    }

    return Math.max(...total)
}

function getPermutations (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
        const permutations = getPermutations(rest, selectNumber - 1);
        const attached = permutations.map((el) => [fixed, ...el]);
        results.push(...attached);
    });

    return results;
}


function splitExpression(expression){
    const total = [];
    let temp = [];
    let operator = new Set();
    for(let element of expression){
        if(
            element === "-" ||
            element === "*" ||
            element === "+"
        ){
            total.push(temp);
            total.push([element]);
            temp = [];
            operator.add(element);
        } else {
            temp.push(element)
        }
    }
    total.push(temp);

    const final = [];
    operator = [...operator];
    const [arr, operators] = [final, operator];

    total.map(element => final.push(element.join("")));

    return [arr, operators];
}

// const expression = "100-200*300-500+20";

const expression = "50*6-3*2"
