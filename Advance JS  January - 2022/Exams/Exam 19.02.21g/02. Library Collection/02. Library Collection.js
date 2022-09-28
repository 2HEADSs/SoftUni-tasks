class LibraryCollection {
    constructor(capacity) {
        capacity = Number(capacity)
        this.capacity = capacity;
        this.books = []
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error(`Not enough space in the collection.`)
        }
        let book = {
            bookName,
            bookAuthor,
            paid: false
        };
        this.books.push(book);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        let book = this.books.find(x => x.bookName === bookName);

        if (!book) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (book.paid === true) {
            throw new Error(`${bookName} has already been paid.`)
        }

        book.paid = true;
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        let currentBook = this.books.find(x => x.bookName === bookName);
        if (!currentBook) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (currentBook.paid === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let index = this.books.findIndex(x => x.currentBook === bookName);
        this.books.splice(index, 1);

        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor) {
        if (bookAuthor) {
            let currentAuthor = this.books.find(x => x.bookAuthor === bookAuthor);
            if (currentAuthor) {
                if (currentAuthor.paid === true) {
                    return `${currentAuthor.bookName} == ${currentAuthor.bookAuthor} - Has Paid.`
                } else {
                    return `${currentAuthor.bookName} == ${currentAuthor.bookAuthor} - Not Paid.`
                }
            } else {
                throw new Error (`${bookAuthor} is not in the collection.`)
            }

        } else {
            let output = [];
            let emptySlots = this.capacity - this.books.length;
            output.push(`The book collection has ${emptySlots} empty spots left.`);
            let sorted = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName)).forEach((el) => {
                if(el.paid ===true){
                    output.push(`${el.bookName} == ${el.bookAuthor} - Has Paid.`)
                } else{
                    output.push(`${el.bookName} == ${el.bookAuthor} - Not Paid.`)
                }
            })
            return output.join('\n')
        }
    }
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());







