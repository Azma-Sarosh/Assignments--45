//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//• Print your array in its original order.
//Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var placesInWorld = ["Thailand", "America", "Srilanka", "Saudiarab", "Londan"];
console.log(placesInWorld);
// sort an array in alphabetical order
console.log('AlphabeticallySorted', __spreadArray([], placesInWorld, true).sort());
// again print the list in orginal order
console.log('Original List', __spreadArray([], placesInWorld, true));
// Print an array in reverse alphabetical order
console.log('Reverse in aAlphabetical order', __spreadArray([], placesInWorld, true).sort().reverse());
// again print the list in orginal order
console.log('Original List', __spreadArray([], placesInWorld, true));
//reverse the order of ur original list
console.log('Reverse the Original list', placesInWorld.reverse());
//Again reverse the list
console.log('Again Reverse', placesInWorld.reverse());
//List become
console.log('Original List', placesInWorld);
//Sort your array again in Alphabetical order
console.log('Again Alphabetically sorted', placesInWorld.sort());
//print the list to show that order has been changed of ur original list
console.log('order has been changed', placesInWorld);
// Again reverse the list
console.log('Again Reversed', placesInWorld.reverse());
console.log('Orinal list is reversed now', placesInWorld);
