// Book constructor
function Book (title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI (){}

// Add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById("book-list");
    // Create tr
    const row = document.createElement("tr");
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `

    list.appendChild(row);

    UI.prototype.clearFields = function (){
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }

}

// Event Listeners
document.getElementById("book-form").addEventListener("submit", function(e){
    // Get form values
    const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value

    // Instantiate Book
    const book = new Book(title, author, isbn);

    // Instantiate UI Object
    const ui = new UI();

    // Add Book To List
    ui.addBookToList(book);

    // CLear Fields
    ui.clearFields();

    e.preventDefault();
});