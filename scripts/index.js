class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}

let myLibrary = [];
function addBookToLibrary(book) {
    myLibrary.push(book);
}

let newBook1 = new Book("Javascript", "Prof. Ramin, Prof. Peris")
addBookToLibrary(newBook1);

let newBook2 = new Book("Python", "Prof. Muge, Prof. Peris")
addBookToLibrary(newBook2);




let bookTitleView = document.getElementById("book_title");
let bookAuthorView = document.getElementById("book_author");
let submitButton = document.getElementById('myButton');

// submitButton.addEventListener("click", () => {
//     console.log(bookTitleView.value);
//     console.log(bookAuthorView.value);
// });

submitButton.addEventListener("click", () => {
    let currentBook = new Book(bookTitleView.value, bookAuthorView.value);
    addBookToLibrary(currentBook);
    
    printAllBooks(myLibrary);
});



function printAllBooks(myLibrary){
    for(let i = 0; i < myLibrary.length; i++) {
        console.log( myLibrary[i].author );
        console.log( myLibrary[i].title );
        console.log("- - - -")
    }
}