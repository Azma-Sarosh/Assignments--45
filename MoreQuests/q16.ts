//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. 

//• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guest_list:string[] = [`Sarosh`,`Sameed`,`Safaan`]

console.log(guest_list)

// print statement


console.log(`P.S: We found a bigger table now we are thinkinh for a big party celebration`)

// A new guest in the beginning of the array
guest_list.unshift('Saraan')

 console.log(guest_list)

 // another guest in the middle of the array



let middleGuest:string = "Salaar";
let middleIndex = guest_list.length/2;
guest_list.splice(middleIndex,0,middleGuest);

console.log (guest_list)

// another quest in the end of the guestlist

guest_list.push("Azma");

console.log(guest_list)

