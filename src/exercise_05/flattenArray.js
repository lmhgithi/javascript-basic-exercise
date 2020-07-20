export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (!array) {
    throw new Error('Flatten undefined or null array');
  }
  const ret = [];
  array.forEach((val) => {
    if (val instanceof Array) {
      // console.log(...val);
      ret.push(...val);
    } else {
      ret.push(val);
    }
  });
  return ret;
}
