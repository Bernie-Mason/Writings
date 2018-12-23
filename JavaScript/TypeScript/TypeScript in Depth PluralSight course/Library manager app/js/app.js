"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var classes_1 = require("./classes");
function GetAllBooks() {
    var books = [
        { id: 1, title: "Ulysses", author: "James Joyce", available: true, category: enums_1.Category.Fiction },
        { id: 2, title: "A Farewell to Arms", author: "Ernest Hemingway", available: false, category: enums_1.Category.Fiction },
        { id: 3, title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", available: true, category: enums_1.Category.Poetry },
        { id: 4, title: "Mody Dick", author: "Herman Melville", available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = "";
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total Books: " + numberOfBooks);
    console.log("First available: " + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log("Getting books in category: " + enums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category == categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookById(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (value, index, array) { return ++index === id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log("Name: " + name);
    if (age) {
        console.log("Age: " + age);
    }
    if (city) {
        console.log("City: " + city);
    }
}
function CheckoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log("Checking out books for: " + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = GetBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == "string") {
        // get all books from a particular author
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    if (typeof bookProperty == "boolean") {
        // get all books from a particular author
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function PrintBook(book) {
    console.log(book.title + " by " + book.author);
}
//******************************************** */
var myBook = {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    available: true,
    category: enums_1.Category.Fiction,
    year: "1813",
    copies: 3,
    pages: 554
};
PrintBook(myBook); // No errors! Has all the propreties defined by a Book even though it has more properties.
var mySecondBook = {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    available: true,
    category: enums_1.Category.Fiction,
    pages: 554,
    markDamaged: function (reason) { return console.log("Damaged: " + reason); }
}; // When book is constrained to the Book type it has to exactly mimic it. 
PrintBook(mySecondBook); // No errors! Has all the propreties defined by a Book even though it has more properties.
mySecondBook.markDamaged("missing back cover");
var logDamage;
logDamage = function (damage) { return console.log("Damagaed: " + damage); };
logDamage("coffee stains");
// let hermansBooks = GetTitles("Herman Melville");
// hermansBooks.forEach(book => console.log(book));
// const myBooks = CheckoutBooks("Bernie", 1, 2, 3, 4, 10)
// myBooks.forEach(book => console.log(book));
// let poetryBooks = GetBookTitlesByCategory(Category.Poetry);
// poetryBooks.forEach(book => console.log(book));
// CreateCustomer("bernie");
// CreateCustomer("bernie", 1, "Bristol");
// CreateCustomer("bernie", 17);
// let x: number;
// x =5;
// let IdGenerator: (chars: string, nums: number) => string;
// // IdGenerator = CreateCustomerID;
// IdGenerator = (id, name) => { return id + name }
// let myID: string = IdGenerator("Bernie", 10);
// console.log(myID);
// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((value, index, array) => console.log(++index + " - " + value)); // idx is the index, value is the value (title)
var lib = new classes_1.UniversityLibrarian(); // totally fine
lib.name = "Bernie";
lib.assistCustomer("LYndad");
//# sourceMappingURL=app.js.map