// Maulana Rafinda

// OOP : Object Oriented Programming. Class dalam pemograman juga bisa disebut sebagai sebuah blueprint atau gambar perencanaan pembangungan sebuah rumah. Dan objectnya itu adalah rumah.
// Class untuk menyimpan data :
class Book {
    constructor(title,author,year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

const bookList = [
    new Book("Lord of the Ring", "Tolkien", 2001),
    new Book("Mocking Jay", "Suzanne", 2014),
    new Book("Harry Potter", "Rowling", 2007)
]

console.log(bookList);

// kalau pagenya sudah selesai loading, maka codingan di baawah akan dieksekusi.
// window.addEventListener("load", (event) => {
//     // DOM : Document Object Model.
//     const titleInput = ducument.getElementById(input-title)
//     const authoeInput = ducument.getElementById(input-author)
//     const yearInput = ducument.getElementById(input-year)

//     const submitButton = ducument.getElementById(submit-button)

//     submitButton.addEventListener("click", (e)=> {
//         console.log(titleInput.value);
//         console.log(yearInput.value);
//         console.log(yearInput.value);
//     })
// })