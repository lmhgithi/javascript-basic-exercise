export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  promises.forEach((p) => {
    if (!(p instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    }
  });
  return new Promise((resolve, reject) => {
    let count = 0;
    for (let i = 0; i < promises.length; i += 1) {
      // eslint-disable-next-line no-loop-func
      promises[i].then(() => {
        count += 1;
        if (count === promises.length) {
          resolve();
        }
        if (i === promises.length - 1 && count !== promises.length) {
          reject();
        }
      // eslint-disable-next-line no-loop-func
      }).catch(() => {
        count -= 1;
      // eslint-disable-next-line no-loop-func
      });
    }
  });
}
