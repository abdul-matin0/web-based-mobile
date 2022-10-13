const app = new Vue({
    el: '#app',
    data: {
        products: [
            { id: 1, subject: 'Math', location: 'London', imageURL: 'assets/subject.jpg', altText: 'math image', price: 100, spaces: 5 },
            { id: 2, subject: 'English', location: 'London', imageURL: 'assets/subject.jpg', altText: 'math image', price: 100, spaces: 5 },
            { id: 3, subject: 'Chemistry', location: 'Dubai', imageURL: 'assets/subject.jpg', altText: 'math image', price: 100, spaces: 5 },
            { id: 4, subject: 'Physics', location: 'Manchester', imageURL: 'assets/subject.jpg', altText: 'math image', price: 100, spaces: 5 },
            { id: 5, subject: 'Biology', location: 'London', imageURL: 'assets/subject.jpg', altText: 'math image', price: 100, spaces: 5 }
        ],
        cart: []
    },
    methods: {
        // adds a product to cart
        addToCart(productId){
            // find selected product id
            var product = this.getProductById(productId);
            if(product.spaces > 0){
                // decrease product space
                --product.spaces;
                
                // get existing product from cart
                var itemInCart = this.cart.find(u => u.productId == productId);
                if(itemInCart != null){
                    // update existing item in cart
                    ++itemInCart.spaces;
                }else{
                    // adding new item to cart
                    itemInCart = {productId: productId, spaces: 1, product: product};
                    this.cart.push(itemInCart);
                }
                
                // save updates in product and cart
                localStorage.setItem('products', JSON.stringify(this.products));
                localStorage.setItem('cart', JSON.stringify(this.cart));
            }
        },
        // removes a product from cart
        removeFromCart(productId){
            // find selected product id
            var product = this.getProductById(productId);
            
        },
        onPageLoad(){
            // gets product from persistent storage
            var products = JSON.parse(localStorage.getItem('products'));
            if(products != null){
                this.products = products;
            }

            // gets cart from persistent storage
            var cart = JSON.parse(localStorage.getItem('cart'));
            if(cart != null){
                this.cart = cart;
            }
        },
        // get product by id
        getProductById(productId){
            var product = this.products.find(u => u.id == productId);
            return product;
        }
    },
    created: function(){
        this.onPageLoad();
     },    
});