Array.prototype.myFilter = function (callback) {
  const newArray = [];
  for (let index = 0; index < this.length; index++) {
    const resultOfCallback = callback(this[i], index, this);
    if (resultOfCallback) {
      newArray[newArray.length] = this[index];
    }
  }
  return newArray;
};

const isEven = (num) => num % 2 === 0;
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(isEven);
console.log({ evenNumbers });
