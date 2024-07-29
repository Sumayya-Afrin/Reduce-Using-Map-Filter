//Map using the reduce

Array.prototype.DemoMap = function (callback) {
  return this.reduce((accumulator, currentValue, index, array) => {
    accumulator.push(callback(currentValue, index, array));
    return accumulator;
  }, []);
};

const arr = [1, 2, 3, 4, 5];

const doubled = arr.DemoMap((element) => element * 2);

console.log(doubled);

//filter using reduce

Array.prototype.customFilter = function (callback) {
  return this.reduce((accumulator, currentValue, index, array) => {
    if (callback(currentValue, index, array)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.customFilter((element) => element % 2 === 0);

console.log(evenNumbers);
