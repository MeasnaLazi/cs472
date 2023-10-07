'use strict';

let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
];

const addBook = function(title, author, libraryID) {
    let newBook =  { title: title, author: author, libraryID: libraryID };
    libraryBooks.push(newBook);

    return newBook;
};

const getTitles = () => {
    return libraryBooks.map(book => book.title).sort();
}

const findBooks = (keyword) => {
    return libraryBooks.filter(book => book.title.includes(keyword));
}

// let newBook = addBook("Hi from other side!", "Lazi", 1);
// console.log("newBook: " + JSON.stringify(newBook));
// console.log("allTitle: " + getTitles());
// console.log("findBooks: " + JSON.stringify(findBooks("Hi")));
