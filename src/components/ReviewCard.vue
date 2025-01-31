<template>
    <div class="review-wrapper">
        <div class="review-section">
            <div class="review-left-section">
                <div>
                    <img src="../assets/icons/review-icon.png" alt="">
                </div>
                <h2 class="review-title">James Smith List Specifications 2023</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem accusamus
                    possimus voluptatum nesciunt quisquam deleniti assumenda quibusdam quis hic.</p>
                <div class="reviewer-section flex">
                    <h3 class="reviewer-name">{{ reviews[currentIndex].reviewer }}</h3>-<small>{{
                        reviews[currentIndex].type }}</small>
                </div>
                <div class="review-button-container">
                    <button v-for="(data, index) in reviews" :key="index" class="slider-btn"
                        :class="{ active: index === currentIndex }" @click="onButtonClick(index)">

                    </button>
                </div>
            </div>
            <div class="review-right-section">
                <img :src="reviews[currentIndex].image" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reviews: [
                {
                    reviewer: "Aabsh Thapa",
                    image: "/src/assets/images/avatar.png",
                    type: "Regular Customer"
                },
                {
                    reviewer: "Aakash Thapa",
                    image: "/src/assets/images/reviewer2.png",
                    type: "Customer"
                },
                {
                    reviewer: "Abhsihek Thapa",
                    image: "/src/assets/images/reviewer3.png",
                    type: "VIP Customer"
                }
            ],
            currentIndex: 0,
            autoSlideInterval: null,
        }

    },
    methods: {

        onButtonClick(index) {
            clearInterval(this.autoSlideInterval);
            this.currentIndex = index;
            this.startAutoSlide();
        },

        startAutoSlide() {
            this.autoSlideInterval = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
            }, 4000);
        },
    },
    mounted() {
        this.startAutoSlide();
    },
    beforeUnmount() {
        clearInterval(this.autoSlideInterval);
    },
}
</script>
