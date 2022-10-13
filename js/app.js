const app = new Vue({
    el: '#app',
    data: {
        products: [
            { id: 1, subject: 'Math', location: 'London', imageURL: 'assets/subject.jpg', altText: 'math image', price: 100, spaces: 5 },
            { id: 2, subject: 'English', location: 'London', imageURL: 'assets/subject.jpg', altText: 'math image', price: 100, spaces: 5 },
            { id: 3, subject: 'Chemistry', location: 'Dubai', imageURL: 'assets/subject.jpg', altText: 'math image', price: 100, spaces: 5 },
            { id: 4, subject: 'Physics', location: 'Manchester', imageURL: 'assets/subject.jpg', altText: 'math image', price: 100, spaces: 5 },
            { id: 5, subject: 'Biology', location: 'London', imageURL: 'assets/subject.jpg', altText: 'math image', price: 100, spaces: 5 }
        ]
    },
    methods: {
        addToCart(id){
            console.log(id, id.type);
        },

        increasePrice(){
            this.products[0].price = ++this.products[0].price;
        }
    }
});