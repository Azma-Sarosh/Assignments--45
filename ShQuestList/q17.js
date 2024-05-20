// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// name array
var guest_list = ["Sarosh", "Sameed", "Safaan"];
console.log(guest_list);
// print statement
console.log("P.S: We found a bigger table now we are thinkinh for a big party celebration");
// A new guest in the beginning of the array
guest_list.unshift('Saraan');
console.log(guest_list);
// another guest in the middle of the array
var middleGuest = "Salaar";
var middleIndex = guest_list.length / 2;
guest_list.splice(middleIndex, 0, middleGuest);
console.log(guest_list);
// another quest in the end of the guestlist
guest_list.push("Azma");
console.log(guest_list);
console.log("we can invite only two people for dinner!");
while (guest_list.length > 2) {
    var removeguest = guest_list.pop();
    console.log("\nSorry ".concat(removeguest, " we can't invite you to dinner!"));
}
;
guest_list.map(function (item) { return console.log("\n".concat(item, " You are still invited to dinner!")); });
guest_list.pop();
guest_list.pop();
console.log(" Empty list", guest_list);
