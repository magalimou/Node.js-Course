
class Book{
    #title;
    #author;
    #isbn;
    #price;
    #available;

    /*Creates an instance of a book.
    * @param {string} title - The title of the book.
    * @param {string} author - The author of the book.
    * @param {string} isbn - The ISBN number of the book.
    * @param {number} price - The price of the book.
    * @param {boolean} available - Indicates whether the book is available or not.
    */
    constructor(title, author, isbn, price, available){
        this.#title = title;
        this.#author = author;
        this.#isbn = isbn;
        this.#price = price;
        this.#available = available;
    }

    /**
    * Gets the information of the book.
    * @returns {string} The information of the book.
    */
    getBookInfo(){
        return ` Title: ${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}, Price: ${this.#price}, Available: ${this.#available}`;
    }

    getPrice(){
        return this.#price;
    }

    getIsbn(){
        return this.#isbn;
    }

    /**
    * Checks if the book is available.
    * @returns {boolean} true if the book is available, false otherwise.
    */
    isAvailable(){
        return this.#available;
    }

}

/**
 * Represents a fiction book, extending the Book class.
 */
class FictionBook extends Book{
    #genre;

    constructor(title, author, isbn, price, available, genre){
        super(title, author, isbn, price, available);
        this.#genre = genre;
    }

    getGenre(){
        return this.#genre;
    }

    getBookInfo(){  
        return super.getBookInfo() + `, Genre: ${this.#genre}`;
    }
}

/**
 * Represents a non-fiction book, extending the Book class.
 */
class NonFictionBook extends Book{
    #topic;

    constructor(title, author, isbn, price, available, topic){
        super(title, author, isbn, price, available);
        this.#topic = topic;
    }

    getTopic(){
        return this.#topic;
    }

    getBookInfo(){
        return super.getBookInfo() + `, Topic: ${this.#topic}`;
    }
}

class User{
    #name;
    #email;
    #userId;

    /**
     * Creates an instance of a user.
     * @param {string} name - The name of the user.
     * @param {string} email - The email of the user.
     * @param {number} userId - The unique identifier of the user.
    */
    constructor(name, email, userId){
        this.#name = name;
        this.#email = email;
        this.#userId = userId;
    }

    setEmail(email){
        this.#email = email;
    }

    setName(name){
        this.#name = name;
    }

    getEmail(){
        return this.#email;
    }

    getUserId(){
        return this.#userId;
    }

    getName(){
        return this.#name;
    } 
}

class Cart{
    #user;
    #books;

    /**
     * Creates an instance of a shopping cart.
     * @param {User} user - The user associated with the cart.
     */
    constructor(user){
        this.#user = user;
        this.#books = [];
    }

    /**
     * Adds a book to the cart if it's available.
     * @param {Book} book - The book to add to the cart.
     */
    addBookToCart(book){
        if(book.isAvailable()){
            this.#books.push(book);
        }else{
            console.log("Book is not available");
        }
       
    }

     /**
     * Removes a book from the cart.
     * @param {Book} book - The book to remove from the cart.
     */
    removeBookFromCart(book){
        this.#books = this.#books.filter(b => b.getIsbn()!== book.getIsbn());
    }

     /**
     * Calculates the total price of all books in the cart.
     * @returns {number} The total price of all books in the cart.
     */
    getTotalPrice(){
        let totalPrice = 0;
        this.#books.forEach(book => {
            totalPrice += book.getPrice();
        });
        return totalPrice;
    }

    getBooks(){
        return this.#books;
    }

    getCartInfo(){
        let cartInfo = `User: ${this.#user.getName()}, Total Price: ${this.getTotalPrice()}, Books: `;
        this.#books.forEach(book => {
            cartInfo += book.getBookInfo();
        });
        return cartInfo;
    }
    
}

class Order{
    #user;
    #books;

    constructor(user, books)
    {  
        this.#user = user;
        this.#books = books;
    }

    getTotalPrice(){
        let totalPrice = 0;
        this.#books.forEach(book => {
            totalPrice += book.getPrice();
        });
        return totalPrice;
    }
    
    getOrderInfo(){
        let orderInfo = `User: ${this.#user.getName()}, Total Price: ${this.getTotalPrice()}, Books: `;
        this.#books.forEach(book => {
            orderInfo += book.getBookInfo();
        });
        return orderInfo;
    }
}






//IMPLEMENTATION
const book1 = new Book("The Alchemist", "Paulo Coelho", "978-0062315007", 10, true);
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "978-0743273565", 15, true);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", "978-0061120084", 20, true);  
const book4 = new FictionBook("1984", "George Orwell", "978-0451524935", 25, true, "Dystopian");
const book5 = new NonFictionBook("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", "978-0062316097", 30, true, "History");

//users
const user = new User("John Doe", "joohndoe@gmail.com", 1);
const user2 = new User("Jane Doe", "jane@gmail.com", 2);
const user3 = new User("John Smith", "smith@gmail.com", 3);

//carts
const cart = new Cart(user);
cart.addBookToCart(book1);
cart.addBookToCart(book2);

const cart2 = new Cart(user2);
cart2.addBookToCart(book3);
cart2.addBookToCart(book4);

const cart3 = new Cart(user3);
cart3.addBookToCart(book5);
cart3.addBookToCart(book1);
console.log(cart3.getCartInfo());
cart3.removeBookFromCart(book1);
console.log(cart3.getCartInfo());

//orders
const order = new Order(user, cart.getBooks());
console.log(order.getOrderInfo());

const order2 = new Order(user2, cart2.getBooks());
console.log(order2.getOrderInfo());