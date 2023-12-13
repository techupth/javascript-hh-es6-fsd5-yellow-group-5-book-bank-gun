// let height = undefined;
// let result = nullish(height);

// function nullish(height) {
//   if (height === null || height === undefined) {
//     return "Height is not defined";
//   }
//   return height;
// }

// console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”

// Exercise #6: Nullish Coalescing
let height = undefined;
let result = height ?? "Height is not defined";

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
