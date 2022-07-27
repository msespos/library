let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return title + " by " + author + ", " + pages + " pages, " + read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("Infinite Jest", "DFW", 1100, "read");
addBookToLibrary("Gain", "Richard Powers", 500, "read");
addBookToLibrary("Godel, Escher, Bach", "Richard Hofstatder", 1200, "not read yet");

console.log(myLibrary[0].info());

myLibrary.forEach((item) => {
  const p = document.createElement("p");
  const book = document.createTextNode(item.info());
  p.appendChild(book);
  const library = document.getElementById("library");
  library.appendChild(p);
});
