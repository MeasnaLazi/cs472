describe("Add New Book", () => {
    it("add book author by Lazi", () => {
        let result = { title: "Hi from other side!", author: "Lazi", libraryID: 1 };
        let newBook =  addBook("Hi from other side!", "Lazi", 1);
        assert.deepEqual(newBook, result);
    });
});

describe("Get All Titles Of The Book", () => {
    it("get all titles from library and sorted", () => {
        let result = ["Hi from other side!", "Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "The Road Ahead" , "Walter Isaacson"];
        assert.deepEqual(getTitles(), result);
    });
});

describe("Find Book By Keyword", () => {
    it("get all titles from library and sorted", () => {
        let result =  [{ title: "Hi from other side!", author: "Lazi", libraryID: 1 }];
        let foundBook = findBooks("Hi");
        assert.deepEqual(foundBook, result);
    });
});