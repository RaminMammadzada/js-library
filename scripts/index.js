class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}

class Library{
    constructor(){
        this.books = [];
    }

    addBookToLibrary(book) {
        this.books.push(book);
        alert(`I am adding book with title ${book.title}.`)
    }

    printAllBooks(){
        for(let i = 0; i < this.books.length; i++) {
            console.log( this.books[i].author );
            console.log( this.books[i].title );
            console.log("- - - -")
        }
    }
}

let myLibrary = new Library();

let newBook1 = new Book("Javascript", "Prof. Ramin, Prof. Peris")
myLibrary.addBookToLibrary(newBook1);
let newBook2 = new Book("Python", "Prof. Muge, Prof. Peris")
myLibrary.addBookToLibrary(newBook2);




let submitButton = document.getElementById("my_button");

submitButton.onclick = function() {
    let bookTitleView = document.getElementById("book_title");
    let bookAuthorView = document.getElementById("book_author");

    let currentBook = new Book(bookTitleView.value, bookAuthorView.value);

    document.getElementById("name").innerHTML = currentBook.title;


    myLibrary.addBookToLibrary(currentBook);
    myLibrary.printAllBooks();

    
}