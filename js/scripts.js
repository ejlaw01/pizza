//business logic
function Pizza (size, base, toppingNumber, toppingNames) {
  this.size = size;
  this.base = base;
  this.toppingNumber = toppingNumber;
  this.toppingNames = toppingNames;
  this.price = 0;
}

Pizza.prototype.priceCalculator = function(size, toppings) {
  this.price += (size + (toppings *2));
}

Pizza.prototype.toppingFormatter = function(array) {
  for (i = 0; i < array.length; i++) {
    if (i === 0) {
      toppingString.push("with " + array[i]);
    } else if (i < (array.length - 1)) {
      toppingString.push(" " + array[i]);
    } else {
      toppingString.push(" and " + array[i]);
    }
  }
}

var newPizza;
var toppingString = [];

//user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var pizzaSize = parseInt($("input:radio[name=size]:checked").val());
    var pizzaBase = $("input:radio[name=base]:checked").val();
    var numberOfToppings = $("[type='checkbox']:checked").length;
    var toppingsArray = [];
    var toppingsSend = $("input:checkbox[name=topping]:checked").each(function(){
      toppingsArray.push($(this).val());
    });
    newPizza = new Pizza(pizzaSize, pizzaBase, numberOfToppings, toppingsArray);
    newPizza.priceCalculator(pizzaSize, numberOfToppings);
    newPizza.toppingFormatter(newPizza.toppingNames);
    $("#order").text("Your " + newPizza.size +"\" " + newPizza.base + " base pizza " + toppingString + " will be $" + newPizza.price + ".");
  });
});
