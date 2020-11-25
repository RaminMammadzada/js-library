class Book {
    constructor(id, title, author, pages, isRead){
        this.id = id
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        // id +=1;
    }
}

class Library{
    constructor(){
        this.books = [];
    }

    addBookToLibrary(book) {
        this.books.push(book);
        // alert(`I am adding book with title ${book.title}.`)
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
// let id = 0;
// let newBook1 = new Book("Javascript", "Prof. Ramin, Prof. Peris", 34)
// myLibrary.addBookToLibrary(newBook1);
// let newBook2 = new Book("Python", "Prof. Muge, Prof. Peris")
// myLibrary.addBookToLibrary(newBook2);


let id = 0;

let submitButton = document.getElementById("my_button");
submitButton.onclick = function() {
    id+=1;
    let bookTitleView = document.getElementById("book_title");
    let bookAuthorView = document.getElementById("book_author");
    let bookPagesView = document.getElementById('book_pages');
    let bookIsReadView = document.getElementById('book_isread').checked;
    // let deleteButton = document.createElement('div');
    
    let currentBook = new Book(id, bookTitleView.value, bookAuthorView.value, bookPagesView.value, bookIsReadView);
   
    myLibrary.addBookToLibrary(currentBook);  
    // deleteButton.innerHTML = 

    removeTableElements();
    displayTable()

      
    // myLibrary.printAllBooks();
    // console.log(myLibrary);
}

function removeTableElements(){
    const table1 = document.getElementById('myTable');
    console.log(table1)
    if(table1 !== null) {
        table1.removeChild(table1.firstChild);
    }
}

function removeBook(book){
    const findBook = myLibrary.findBook(book);
    myLibrary.splice(findBook, 1);
    // alert('deleted!')
    // displayTable();

}
function displayTable() {
    
    insertHead();

    myLibrary.books.forEach((book, index) =>{  
        insertRow(book);
    });
}

function insertHead(){
    const table1= document.getElementById('myTable');   
    const row1 = table1.insertRow(0);
    const cell2 = row1.insertCell(0);
    cell2.innerHTML = "<b>Title</b>";
    const cell3 = row1.insertCell(1);
    cell3.innerHTML = "<b>Author</b>";
    const cell4 = row1.insertCell(2);
    cell4.innerHTML = "<b>Pages</b>";
    const cell5 = row1.insertCell(3);
    cell5.innerHTML = "<b>isRead</b>";
    const cell6 = row1.insertCell(4);
    cell6.innerHTML = "<b>Delete</b>";

}
function insertRow(book){
    const table = document.getElementById('myTable');
    const row = table.insertRow(1);
    const cell0 = row.insertCell(0);
    const cell1 = row.insertCell(1);
    const cell2 = row.insertCell(2);
    const cell3 = row.insertCell(3);
    const deleteButton= row.insertCell(4);
    cell0.innerHTML = book.title;
    cell1.innerHTML = book.author;
    cell2.innerHTML = book.pages;
    cell3.innerHTML = book.isRead;
    deleteButton.innerHTML = `<button onclick="removeTableElements()"> Delete</button>`;

};

