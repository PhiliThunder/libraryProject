const myLibrary = []; //Stores all books.

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read) {
        this.read = "already read";
    } else {
        this.read = "not read yet";
    }
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBookToLibrary() {
    const title = prompt("What is the books title?");
    const author = prompt("Who wrote the book?");
    const pages = prompt("How many pages does the book contain?");
    const read = prompt("Have you read the book yet? Type something if yes, otherwise leave empty")
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}