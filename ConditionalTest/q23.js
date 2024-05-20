//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var Car = 'subaru';
// Test number 1
console.log("Is car === 'subaru'? I predict True.");
console.log(Car === 'subaru'); //true
// Test number 2
console.log("Is car !== 'toyota'? I predict True.");
console.log(Car !== 'toyota'); //true
// Test number 3
console.log("Is car === 'Subaru'? I predict False.");
console.log(Car === 'subaru'); //false// Test number 4|console.log("Is car !== 'Subaru'? I predict True.");
console.log(Car !== 'Subaru'); //false
// Test number 5
var is_JapaneseCar = true;
console.log("Is car == 'subaru' and is Japanese Car is True? I predict True.");
console.log(Car === 'subaru' && is_JapaneseCar); //true
// Test number 6
var has_Sunroof = false;
console.log("Is car == 'subaru' or has Sunroof is True? I predict True.");
console.log(Car === 'subaru' || has_Sunroof); //True one condition is true
// Test number 7
var is_Sedan = true;
console.log("Is car == 'subaru' and is Sedan is False? I predict False.");
console.log(Car === 'subaru' && !is_Sedan); //false
// Test number 8
var is_Convertible = false;
console.log("Is car != 'subaru' or is Convertible is False? I predict False.");
console.log(Car !== 'subaru' || !is_Convertible); //true
// Test number 9
var is_LuxuryCar = false;
console.log("Is car == 'subaru' or is LuxuryCar is True? I predict True.");
console.log(Car === 'subaru' || is_LuxuryCar); //true one condition is true
// Test number 10
var is_CompactCar = true;
console.log("Is car != 'subaru' and isCompactCar is False? I predict False.");
console.log(Car !== 'subaru' && !is_CompactCar); //true
