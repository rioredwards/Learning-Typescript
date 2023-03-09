/* Callback function */

// This function takes a callback function as an argument
// The callback has a return type of void in the context of this function even though it returns a number
// TH
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
