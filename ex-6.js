let height = undefined;
let result;

function getHeight(weed) {
  weed ??= "Height is not defined";
  return weed;
}
result = getHeight(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
