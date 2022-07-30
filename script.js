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

let removeBookFromLibrary = (bookIndex) => {
  myLibrary.splice(bookIndex, 1);
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
    div.appendChild(removeBookButton);
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

const targetDiv = document.getElementById("form");
targetDiv.style.display = "none";
const formViewToggleButton = document.getElementById("toggle");
formViewToggleButton.onclick = () => {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};
