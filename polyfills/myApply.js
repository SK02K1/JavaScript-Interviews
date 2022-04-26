Function.prototype.myApply = function () {
  const [obj, propsArray] = arguments;
  const func = this;
  obj.func = func;
  obj.func(...propsArray);
};

function userSandwichInfo(sides, drink) {
  console.log(
    `
        Layer01: ${this.layerOne},
        Layer02: ${this.layerTwo},
        Layer03: ${this.layerThree},
        Sides: ${sides},
        Drink: ${drink}
        `
  );
}

const sandwich = {
  layerOne: 'lettuce',
  layerTwo: 'mayo',
  layerThree: 'onion',
};

userSandwichInfo.myApply(sandwich, ['fries', 'coke']);
