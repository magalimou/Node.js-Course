class Book{
    #title;
    #author;
    #isbn;
    #price;
    #available;

    constructor(title, author, isbn, price, available){
        this.#title = title;
        this.#author = author;
        this.#isbn = isbn;
        this.#price = price;
        this.#available = available;
    }

    getBookInfo(){
        return ` Title: ${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}, Price: ${this.#price}, Available: ${this.#available}`;
    }

    getPrice(){
        return this.#price;
    }

    getIsbn(){
        return this.#isbn;
    }

    isAvailable(){
        return this.#available;
    }

}

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

    constructor(user){
        this.#user = user;
        this.#books = [];
    }

    addBookToCart(book){
        if(book.isAvailable()){
            this.#books.push(book);
        }else{
            console.log("Book is not available");
        }
       
    }

    removeBookFromCart(book){
        this.#books = this.#books.filter(b => b.getIsbn()!== book.getIsbn());
    }

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