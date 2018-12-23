import { Category } from "./enums";
import { Book, DamageLogger, Author, Librarian } from "./interfaces";
import { UniversityLibrarian } from "./classes";

function GetAllBooks(): Book[] {
    let books = [ 
        { id: 1, title: "Ulysses", author: "James Joyce", available: true, category: Category.Fiction  },
        { id: 2, title: "A Farewell to Arms", author: "Ernest Hemingway", available: false, category: Category.Fiction  },
        { id: 3, title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", available: true, category: Category.Poetry  },
        { id: 4, title: "Mody Dick", author: "Herman Melville", available: true, category: Category.Fiction  }
    ];

    return books;
}

function LogFirstAvailable(books: Book[] = GetAllBooks()) {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = "";
    for (let currentBook of books) {
        if(currentBook.available){
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log("Total Books: " + numberOfBooks);
    console.log("First available: " + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    console.log("Getting books in category: " + Category[categoryFilter]);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category == categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    } 
    return filteredTitles;
}

function LogBookTitles(titles: string[]): void{
    for (const title of titles) {
        console.log(title);
    }
}

function GetBookById(id: number): Book {
    const allBooks = GetAllBooks();
    return allBooks.filter((value, index, array) => ++index === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log("Name: " + name);
    if(age) {
        console.log("Age: " + age);
    }
    if(city) {
        console.log("City: " + city);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log("Checking out books for: " + customer);

    let booksCheckedOut: string[] = [];
    for(let id of bookIDs) {
        let book = GetBookById(id);
        if(book.available) {
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if(typeof bookProperty == "string") {
        // get all books from a particular author
        for (const book of allBooks) {
            if(book.author === bookProperty){
                foundTitles.push(book.title);
            }
        }
    }

    if(typeof bookProperty == "boolean") {
        // get all books from a particular author
        for (const book of allBooks) {
            if(book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;    
}

function PrintBook(book: Book): void {
    console.log(book.title + " by " + book.author);
}


//******************************************** */

let myBook = {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    available: true,
    category: Category.Fiction,
    year: "1813",
    copies: 3,
    pages: 554
} 

PrintBook(myBook); // No errors! Has all the propreties defined by a Book even though it has more properties.
let mySecondBook: Book = {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    available: true,
    category: Category.Fiction,
    pages: 554,
    markDamaged: (reason: string) => console.log("Damaged: " + reason)
    
} // When book is constrained to the Book type it has to exactly mimic it. 
PrintBook(mySecondBook); // No errors! Has all the propreties defined by a Book even though it has more properties.
mySecondBook.markDamaged("missing back cover");

let logDamage: DamageLogger;
logDamage = (damage: string) => console.log("Damagaed: " + damage);
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

let lib: Librarian = new UniversityLibrarian(); // totally fine
lib.name = "Bernie";
lib.assistCustomer("LYndad");