<template>
    <div v-if="product">
        <div class="img-wrap">
            <img :src="product.imageUrl" />
        </div>
        <div class="product-details">
            <h1>{{ product.product_name }}</h1>        
            <h3 class="price">{{ product.price }}</h3>
            <p>{{ product.product_description }}</p>
                    
            <button @click="addToCart" v-if="!itemsIsInCart" class="add-to-cart">Add to Cart</button>
            <button class="grey-button" v-if="itemsIsInCart">Item is already in Cart</button>         
        </div>
    </div>
    <div v-else>
        <NotFoundPage />
    </div>

</template>

<script>
import axios from 'axios';
import NotFoundPage from './NotFoundPage.vue';
export default {
    name : "ProductDetailPage",
    methods:{
        async addToCart(){
            await axios.post('/api/users/12345/cart', { id : this.$route.params.productId});
            alert("Sucessfully added item in Cart!");
        }
    },
    components : {
        NotFoundPage,
    },
    data() {
        return {
            product : {},
            cartItems : []
        }
    },
    computed : {
        itemsIsInCart(){
            return  this.cartItems.some(item => item.id === this.$route.params.productId)
        }

    },
    async created(){
        const response = await axios.get(`/api/products/${this.$route.params.productId}`);
        const product = response.data;
        this.product = product;

        const cartResponse = await axios.get('/api/users/12345/cart');
        const cartItems = cartResponse.data;
        this.cartItems = cartItems;

    }
}
</script>