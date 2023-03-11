/* Interfaces for Functions */

// type addFn = (a: number, b: number) => number;
interface addFn {
  (a: number, b: number): number;
}

let add: addFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
