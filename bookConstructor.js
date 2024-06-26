function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read === true) {
        this.read = "already read";
    } else {
        this.read = "not read yet";
    }
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  player1.sayName(); // logs 'steve'
  player2.sayName(); // logs 'also steve'
  