/* eslint-disable no-use-before-define, max-classes-per-file */
class Book {
  constructor(id, title, author, pages, isRead) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBookToLibrary(book) {
    this.books.push(book);
  }
}

const myLibrary = new Library();
let id = 0;

const submitButton = document.getElementById('my_button');
submitButton.onclick = () => {
  id += 1;
  const inputs = [];
  const bookTitleView = document.getElementById('book_title');
  inputs.push(bookTitleView.value);
  const bookAuthorView = document.getElementById('book_author');
  inputs.push(bookAuthorView.value);
  const bookPagesView = document.getElementById('book_pages');
  inputs.push(bookPagesView.value);
  const bookIsReadView = document.getElementById('book_isread').checked;
  inputs.push(bookIsReadView);

  const currentBook = new Book(id, inputs[0], inputs[1], inputs[2], inputs[3]);

  myLibrary.addBookToLibrary(currentBook);

  removeTableElements();
  displayTable();
};

function removeTableElements() {
  const table1 = document.getElementById('myTable');
  if (table1 !== null) {
    table1.removeChild(table1.firstChild);
  }
}


function removeBook(id) {
  const findBook = myLibrary.books.findIndex(book => book.id === id);
  myLibrary.books.splice(findBook, 1);
  removeTableElements();
  displayTable();
}

function displayTable() {
  insertHead();

  myLibrary.books.forEach((book) => {
    insertRow(book);
  });
}

function insertHead() {
  const table1 = document.getElementById('myTable');
  const row1 = table1.insertRow(0);
  const cell2 = row1.insertCell(0);
  cell2.innerHTML = '<b>Title</b>';
  const cell3 = row1.insertCell(1);
  cell3.innerHTML = '<b>Author</b>';
  const cell4 = row1.insertCell(2);
  cell4.innerHTML = '<b>Pages</b>';
  const cell5 = row1.insertCell(3);
  cell5.innerHTML = '<b>isRead</b>';
  const cell6 = row1.insertCell(4);
  cell6.innerHTML = '<b>Action</b>';
}

function insertRow(book) {
  const table = document.getElementById('myTable');
  const row = table.insertRow(1);
  const cell0 = row.insertCell(0);
  const cell1 = row.insertCell(1);
  const cell2 = row.insertCell(2);
  const cell3 = row.insertCell(3);
  const deleteButton = row.insertCell(4);

  cell0.innerHTML = book.title;
  cell1.innerHTML = book.author;
  cell2.innerHTML = book.pages;
  createIsRead(cell3, book);
  deleteButton.innerHTML = '<button> Delete</button>';
  deleteButton.onclick = () => {
    removeBook(book.id);
  };
}


function createIsRead(cell3, currentBook) {
  const isReadCheckbox = document.createElement('INPUT');
  isReadCheckbox.setAttribute('type', 'checkbox');
  isReadCheckbox.setAttribute('id', 'is_read');
  isReadCheckbox.checked = currentBook.isRead;
  cell3.appendChild(isReadCheckbox);

  updateIsRead(cell3, currentBook);
}

function updateIsRead(cell3, currentBook) {
  cell3.onclick = () => {
    const currentBookIndex = myLibrary.books.findIndex(book => book.id === currentBook.id);

    if (currentBook.isRead === true) {
      myLibrary.books[currentBookIndex].isRead = false;
    } else {
      myLibrary.books[currentBookIndex].isRead = true;
    }
  };
}