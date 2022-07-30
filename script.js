let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

let removeBookFromLibrary = (bookIndex) => {
  myLibrary.splice(bookIndex, 1);
  displayLibrary();
}

let toggleReadStatus = (book) => {
  if (book.read === "read") {
    book.read = "not read yet";
  } else {
    book.read = "read";
  }
  displayLibrary();
}

let displayLibrary = () => {
  const library = document.getElementById("library");
  while (library.firstChild) {
    library.removeChild(library.firstChild);
  }
  myLibrary.forEach((item, index) => {
    const div = document.createElement("div");
    const book = document.createTextNode(item.info());
    div.appendChild(book);
    div.classList.add("book");
    const removeBookButton = document.createElement("button");
    removeBookButton.classList.add("book-button");
    removeBookButton.textContent = "REMOVE BOOK";
    removeBookButton.onclick = () => {
      removeBookFromLibrary(index);
    };
    const toggleReadButton = document.createElement("button");
    toggleReadButton.classList.add("book-button")
    toggleReadButton.textContent = "TOGGLE STATUS";
    toggleReadButton.onclick = () => {
      toggleReadStatus(item);
    };
    div.appendChild(toggleReadButton);
    const buttons = document.createElement("div");
    buttons.appendChild(removeBookButton);
    buttons.appendChild(toggleReadButton);
    buttons.classList.add("book-buttons");
    div.appendChild(buttons);
    library.appendChild(div);
  });
};

const addBookButton = document.querySelector('#button');
addBookButton.onclick = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  let readOrNot;
  if (document.getElementById('read').checked) {
    readOrNot = 'read';
  } else {
    readOrNot = 'not read yet';
  }
  addBookToLibrary(title, author, pages, readOrNot);
  displayLibrary();
};

const form = document.getElementById("form");
form.style.display = "none";
const formViewToggleButton = document.getElementById("toggle");
formViewToggleButton.onclick = () => {
  if (form.style.display !== "none") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
};
