const library = [ //Stores all books.
    {
        "title": "Torpis",
        "author": "Luppis Sopper",
        "pages": 443,
        "read": "already read"
    },
    {
        "title": "Jender",
        "author": "Ulser Olsen",
        "pages": 223,
        "read": "already read"
    },
    {
        "title": "Politer",
        "author": "Poppe Royny",
        "pages": 234,
        "read": "already read"
    }
]; 

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

function displayBooks(books) {
    const container = document.getElementById("main");
    books.forEach(book => {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = book.title;
        container.appendChild(card);
    });
}
displayBooks(library);