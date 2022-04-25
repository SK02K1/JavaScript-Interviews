Array.prototype.myReduce = function (
  reducerFunction,
  initialAccumulatorValue = this[0]
) {
  let accumulator = initialAccumulatorValue;
  let index = initialAccumulatorValue === this[0] ? 1 : 0;
  for (index; index < this.length; index++) {
    accumulator = reducerFunction(accumulator, this[index], index, this);
  }
  return accumulator;
};

const sumReducer = (prevSumValue, num) => prevSumValue + num;
const numbers = [1, 2, 3, 4, 5];
const sumOfNumbers = numbers.myReduce(sumReducer, 0);
console.log({ sumOfNumbers });
