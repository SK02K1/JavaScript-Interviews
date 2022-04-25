Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let index = 0; index < this.length; index++) {
    newArray[index] = callback(this[index], index, this);
  }
  return newArray;
};

const doubleNumber = (num) => num * 2;
const arr = [1, 2, 3, 4, 5];
const doubledArr = arr.myMap(doubleNumber);
console.log({ doubledArr });
