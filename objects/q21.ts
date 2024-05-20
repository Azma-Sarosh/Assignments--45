//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define the Book interface

interface book {
    title: string;
    author: string;
    pages: number;
}

// Create objects containing information about different books

let book1: book = {
    title: "Golden Girl",
    author: "Backhimgun",
    pages: 241
};

let book2: book = {
    title: "Golden boy",
    author: "Georgehimgum",
    pages: 281
};


console.log("Book 1:");
console.log("Title:", book1.title);
console.log("Author:", book1.author);
console.log("Pages:", book1.pages);

console.log("\nBook 2:");
console.log("Title:", book2.title);
console.log("Author:", book2.author);
console.log("Pages:", book2.pages);

