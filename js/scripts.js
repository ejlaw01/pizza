//business logic
function Pizza (size) {
  this.size = size;
  this.price = 0;
}

Pizza.prototype.priceCalculator = function(size) {
  return this.price += size;
}

var newPizza;

//user interface logic
$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault();
    var pizzaSize = parseInt($("input:radio[name=size]:checked").val());
    newPizza = new Pizza(pizzaSize);
    newPizza.priceCalculator(pizzaSize);
    console.log(newPizza.price);
    $("#output").text("$" + newPizza.price);
  });

});
