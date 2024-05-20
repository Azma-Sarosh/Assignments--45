//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}


function make_great(magicians: string[]): void {
    
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
let magicianNames: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];


make_great(magicianNames);
show_magicians(magicianNames);


let magicians: string[] = ["Bob", "Charlie", "Eric"];
let greatMagicians: string[] = make_great([...magicians]); 
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Magicians made Great:");
show_magicians(greatMagicians);





function make_great(magicians: string[]) {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`Great ${magician}`);
    }
    return greatMagicians;
}
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians: string[] = ["Bob", "Charlie", "Eric"];
let greatMagicians: string[] = make_great([...magicians]); 
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Magicians made Great:");
show_magicians(greatMagicians);