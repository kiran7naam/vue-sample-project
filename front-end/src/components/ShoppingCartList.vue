<template>
    <div class="product-container"
        v-for="product in products"
        :key="product.id">
            <img :src="product.image_path" class="product-image"/>
            <div class="details-wrap">
                <h3>{{ product.product_name }}</h3>
                <p>{{ product.price }}</p>
            </div>
            <button class="remove-button">Remove from cart</button>
        </div>
</template>
<script>
export default{
    name : "ShoppingCartList",
    props : ['products']
}
</script>