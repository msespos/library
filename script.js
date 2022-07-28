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
  myLibrary = [];
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

let displayLibrary = () => {
  myLibrary.forEach((item) => {
    const div = document.createElement("div");
    const book = document.createTextNode(item.info());
    div.appendChild(book);
    const removeBookButton = document.createElement("button");
    div.classList.add("book");
    removeBookButton.classList.add("remove-book-button");
    removeBookButton.textContent = 'REMOVE BOOK'
    removeBookButton.onclick = () => {
      library.removeChild(div);
    }
    div.appendChild(removeBookButton);
    const library = document.getElementById("library");
    library.appendChild(div);
  });
};

const button = document.querySelector('#button');
button.onclick = () => {
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
}

const targetDiv = document.getElementById("form");
const buttonTwo = document.getElementById("toggle");
buttonTwo.onclick = () => {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};
