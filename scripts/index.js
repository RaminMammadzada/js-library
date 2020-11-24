class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages= pages;
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

let newBook1 = new Book("Javascript", "Prof. Ramin, Prof. Peris", 34)
myLibrary.addBookToLibrary(newBook1);
// let newBook2 = new Book("Python", "Prof. Muge, Prof. Peris")
// myLibrary.addBookToLibrary(newBook2);




let submitButton = document.getElementById("my_button");
insertHead();
submitButton.onclick = function() {
    let bookTitleView = document.getElementById("book_title");
    let bookAuthorView = document.getElementById("book_author");
    let bookPages = document.getElementById('pagesInput')

    let currentBook = new Book(bookTitleView.value, bookAuthorView.value);

    
    // myLibrary.books.forEach((book) =>{  
    //  document.getElementById("name").innerHTML = book.title;
    //  document.getElementById("author").innerHTML = book.author;
         
    // }); 
   
    myLibrary.addBookToLibrary(currentBook);  
    insertRow(currentBook);
    // displayTable()  

  
    // myLibrary.printAllBooks();
    
}

function insertHead(){
    const table1= document.getElementById('myTable');   
    const header = table1.createTHead();
    const row1 = header.insertRow(0);
    const cell2 = row1.insertCell(0);
    cell2.innerHTML = "<b>Title</b>";
    const cell3 = row1.insertCell(1);
    cell3.innerHTML = "<b>Author</b>";
    const cell4 = row1.insertCell(2);
    cell4.innerHTML = "<b>Pages</b>";
    const cell5 = row1.insertCell(3);
    cell5.innerHTML = "<b>isRead</b>";

}
function insertRow(book){
    const table= document.getElementById('myTable');    
    const row = table.insertRow(1);
    const cell= row.insertCell(0);
    const cell1= row.insertCell(1);
    const cell2= row.insertCell(2);
    const cell3= row.insertCell(3);
    cell.innerHTML = book.title;
    cell1.innerHTML = book.author ;
    cell2.innerHTML= book.pages;
    cell3.innerHTML= book.isRead;
};

