<template>
    <div class="grid-wrap">
     <div 
     class="product-item"
     v-for="product in products" 
     :key="product.id"
     >
        <img :src="product.image_path"/>
        <h3 class="product-name">{{ product.product_name }}</h3>
        <p class="product-price">{{ product.product_description }}</p>
        <p class="product-price">{{ product.price }}</p>
        <router-link :to="'/products/' + product.id">
            <button>View Details</button>
        </router-link>
       
     </div>
   </div>
</template>
<script>
export default {
    name : "ProductsList",
    props : ['products'],

}
</script>