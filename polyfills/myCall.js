Function.prototype.myCall = function () {
  const [obj, ...props] = arguments;
  const func = this;
  obj.func = func;
  obj.func(...props);
};

function printUserDetails(city) {
  console.log(`I am ${this.name} and I am from ${city}`);
}

const user = {
  name: 'Sourabh',
};

printUserDetails.myCall(user, 'delhi');
