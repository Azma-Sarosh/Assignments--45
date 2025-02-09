//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function orderSandwich(...items: string[]) {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log(" - Just bread, really?");
    } else {
        console.log(" - Bread");
        for (let item of items) {
            console.log(` - ${item}`);
        }
        console.log(" - Bread");
    }
    console.log("Enjoy your sandwich!");
}
orderSandwich("Cheese", "Tomato", "Lettuce");
orderSandwich("Ham", "Mustard");
orderSandwich();