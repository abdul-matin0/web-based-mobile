const app = new Vue({
    el: '#app',
    data: {
        lessons: lessons,
        cart: []
    },
    methods: {
        // adds a lesson to cart
        addToCart(lessonId){
            // find selected lesson id
            var lesson = this.getLessonById(lessonId);
            if(lesson.spaces > 0){
                // decrease lesson space
                --lesson.spaces;

                // get existing item from cart
                var itemInCart = this.getCartItemFromCartByLessonId(lessonId);
                if(itemInCart != null){
                    // update existing item in cart
                    ++itemInCart.spaces;
                }else{
                    // adding new item to cart
                    itemInCart = {lessonId: lessonId, spaces: 1, lesson: lesson};
                    this.cart.push(itemInCart);
                }
                
                // save updates in lesson and cart
                this.saveLessonToStorage();
                this.saveCartToStorage();
            }
        },
        // removes a lesson from cart
        removeFromCart(lessonId){
            // find selected lesson in cart
            var itemInCart = this.getCartItemFromCartByLessonId(lessonId);

            if(itemInCart.spaces == 1){
                // if just one item space is left, remove item completely from cart
                var index = this.cart.map(x => x.lessonId).indexOf(lessonId);
                this.cart.splice(index, 1);
            }else{
                // reduce number of spaces of item in cart
                --itemInCart.spaces;
            }

            // increase lesson space 
            var lesson = this.getLessonById(lessonId);
            ++lesson.spaces;

            // save updates in lesson and cart
            this.saveLessonToStorage();
            this.saveCartToStorage();
        },
        onPageLoad(){
            // gets lesson from persistent storage
            var lessons = JSON.parse(localStorage.getItem('lessons'));
            if(lessons != null){
                this.lessons = lessons;
            }

            // gets cart from persistent storage
            var cart = JSON.parse(localStorage.getItem('cart'));
            if(cart != null){
                this.cart = cart;
            }
        },
        // get lesson by id
        getLessonById(lessonId){
            var lesson = this.lessons.find(u => u.id == lessonId);
            return lesson;
        },
        // get item in cart by id
        getCartItemFromCartByLessonId(lessonId){
            var item = this.cart.find(u => u.lessonId == lessonId);
            return item;
        },
        // saves lessons to local storage
        saveLessonToStorage(){
            localStorage.setItem('lessons', JSON.stringify(this.lessons));
        },
        // saves cart to local storage
        saveCartToStorage(){
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
    },
    computed: {
        disableCartButton: function(){
            return this.cart.length > 0 ? false : true;
        }
    },
    created: function(){
        this.onPageLoad();
     },    
});