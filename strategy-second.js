var CardSwipingMachine = function (cardStrategy) {
  this.cardStrategy = cardStrategy;
};

CardSwipingMachine.prototype.swipe = function (amount) {
  return this.cardStrategy(amount);
};

var creditCardStrategy = function (amount) {
  console.log("Amount "+amount+" is debited from credit card");
};

var debitCardStrategy = function (amount) {
  console.log("Amount "+amount+" is debited from debit card");
};


var creditCardSwipeMachine = new CardSwipingMachine(creditCardStrategy);
var debitCardSwipeMachine = new CardSwipingMachine(debitCardStrategy);

debitCardSwipeMachine.swipe(1200);    
creditCardSwipeMachine.swipe(1000);  