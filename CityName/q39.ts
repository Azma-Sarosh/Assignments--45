//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

//"Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value that’s returned.



function city_country(city: string, country: string) {
 return `${city}, ${country}`;
  
}

let formattedString: string = city_country("Lahore", "Pakistan");
console.log(formattedString); 

formattedString = city_country("UAE", "Dubai");
console.log(formattedString);
formattedString = city_country("Scotland", "UK");
console.log(formattedString);