let library = [ //Stores all books.
];

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read) {
        this.read = "Already read";
    } else {
        this.read = "Not read yet";
    }
    this.index = index;
    this.selfDestruct = function () {
        removeBookFromLibrary(index);
    }
}

let bookCounter = 0;

function addBookToLibrary(title, author, pages, read) {
    const index = bookCounter;
    const newBook = new Book(title, author, pages, read, index);
    library.push(newBook);
    bookCounter += 1;
}

function removeBookFromLibrary(index) {
    library = library.filter(function (book) {
        return book["index"] !== index;
    })
    displayBooks(library);
}

function displayBooks(books) {
    const container = document.querySelector("#bookshelf");
    container.replaceChildren(); //Removes all books, before readding.
    books.forEach(book => {
        const card = document.createElement("div");
        card.className = "card";
        const title = document.createElement("h1");
        title.textContent = book.title;
        card.appendChild(title);
        const author = document.createElement("h2");
        author.textContent = book.author;
        card.appendChild(author);
        const pages = document.createElement("h3");
        pages.textContent = book.pages + " pages";
        card.appendChild(pages);
        const read = document.createElement("h4");
        read.textContent = book.read;
        card.appendChild(read);
        const removeButton = document.createElement("button");
        removeButton.className = "remove-button";
        removeButton.textContent = "Remove book";
        card.appendChild(removeButton);
        container.appendChild(card);
        removeButton.addEventListener("click", () => {
            removeBookFromLibrary(book["index"]);
        });
    });
}

const dialog = document.querySelector("#new-book");
const showButton = document.querySelector("#open-dialog");
const closeButton = document.querySelector("#close-dialog");
const submitBook = document.querySelector("#submit-book");
const form = document.querySelector("#book-form");

showButton.addEventListener("click", () => {
    dialog.showModal();
});
closeButton.addEventListener("click", () => {
    dialog.close();
});
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData.entries());

    const title = formEntries.title;
    const author = formEntries.author;
    const pages = formEntries.pages;
    const read = formEntries["read-or-not"] === "yes";

    addBookToLibrary(title, author, pages, read)
    displayBooks(library);
    dialog.close();
    form.reset();
})