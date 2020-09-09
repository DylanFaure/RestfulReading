export class Book {
    constructor(title, author, description, pages, currentPage, read) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }
    readBook(page) {
        if (page < 1 || page > this.pages)
            return (0);
        this.currentPage = page;
        console.log("Vous êtes actuellement à la page" + page + "du livre.");
        if (page == this.pages)
            this.read = true;
        return (1);
    }
}

let book1 = new Book("Titre book1", "Auteur book1", "Desc book1", 110, 1, false);
let book2 = new Book("Titre book2", "Auteur book2", "Desc book2", 220, 20, false);
let book3 = new Book("Titre book3", "Auteur book3", "Desc book3", 330, 329, false);

export const books = [book1, book2, book3];
