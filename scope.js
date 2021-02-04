const bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    console.log(result);
    return result;
}  

const output = sum(12, 4);
console.log(output);
console.log(bonus);