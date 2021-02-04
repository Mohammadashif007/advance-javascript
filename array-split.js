// const nums = [2, 3, 5, 6, 7, 4];
// const part = nums.slice(1, 4);
// console.log(part);
// console.log(nums);



const nums = [2, 3, 4, 5, 6, 9, 8, 7, 0 ,1];
const remove = nums.splice(2, 4, 22, 33, 44);
console.log(remove);
console.log(nums);

const together  = nums.join(",");
console.log(together);