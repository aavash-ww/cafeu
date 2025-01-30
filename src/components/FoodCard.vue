<template>
    <div class="food-card-container">
        <div v-for="(info, index) in data" :key="index" class="food-card">
            <div class="food-card-image">
                <img :src="info.image" alt="">
            </div>
            <div class="food-card-content">
                <h5 class="food-card-title">{{ info.title }}</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit</p>
                <div class="food-card-bottom">
                    <div class="delivery-price">Delivery Fee: $10</div>
                    <div class="flex">
                        <div class="plus-icon">
                            <img src="../assets/icons/plus-icon.svg" alt="">
                        </div>
                        <div class="cart-icon">
                            <img src="../assets/icons/cart-icon.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="price">$9.9</div>
        </div>
    </div>
</template>

<script>
import data from "../data/foodcard.json"
export default {
    data() {
        return {
            data
        }
    }
}
</script>