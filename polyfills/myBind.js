Function.prototype.myBind = function () {
  const [obj, ...props] = arguments;
  const func = this;
  obj.func = func;
  return function () {
    obj.func(...props);
  };
};

function showUserInfo(city) {
  console.log(this.name, city);
}

const user = {
  name: 'Sourabh',
};

const showUsername = showUserInfo.myBind(user, 'delhi');
showUsername();
