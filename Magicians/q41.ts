//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicianNames: string[]) 

{
    magicianNames.forEach(magician => {
        console.log(magician);
    });
}
let magicianNames: string[] = ["Bob", "Eric", "Charlie", "John"];
show_magicians(magicianNames);
