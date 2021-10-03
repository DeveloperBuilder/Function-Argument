//function zonder argumenten

const verfRood = function(){
    console.log("The wall has been painted red")
};
verfRood();

//function met 1 argument

const verfGroen = function(item){
    console.log("The wall has been painted " + item)
};
verfGroen("green");

//2 argumenten in een function

const verfMultiply = function(color1, color2){
    console.log("The north wall has been painted " + color1);
    console.log("The south-east wall has been painted " + color2);
  };

verfMultiply("orange", "grey");

//does the order of the arguments matter when calling the function? ja 
//what happens if you switch them in the function definition? werkt niet meer, krijgt undefined
//what happens if you change the order of the arguments in the function definition and when calling the function? de volgorde veranderd