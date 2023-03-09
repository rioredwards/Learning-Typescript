/* Never */

// Never type is used when a function never returns anything

// This function never returns anything, so it's a never type
// Functions that enter an infinite loop are also never types
// Can also be a void type, but never is more specific
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
