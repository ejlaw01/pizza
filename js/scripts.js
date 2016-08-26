//business logic
function Pizza (size, toppingsNumber, toppingNames) {
  this.size = size;
  this.toppingsNumber = toppingsNumber;
  this.toppingNames = toppingNames;
  this.price = 0;
}

Pizza.prototype.priceCalculator = function(size, toppings) {
  this.price += (size + (toppings *2));
}

var newPizza;

//user interface logic
$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault();
    var pizzaSize = parseInt($("input:radio[name=size]:checked").val());
    var numberOfToppings = $("[type='checkbox']:checked").length;
    var toppingsArray = [];
    var toppingsSend = $("input:checkbox[name=topping]:checked").each(function(){
      toppingsArray.push($(this).val());
    });
    newPizza = new Pizza(pizzaSize, numberOfToppings, toppingsArray);
    newPizza.priceCalculator(pizzaSize, numberOfToppings);
    console.log(newPizza.price);
    $("#order").text("Your " + newPizza.size +" inch pizza with " + newPizza.toppingNames + " will be $" + newPizza.price);
  });

});
