//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicianNames) {
    magicianNames.forEach(function (magician) {
        console.log(magician);
    });
}
var magicianNames = ["Bob", "Eric", "Charlie", "John"];
show_magicians(magicianNames);
