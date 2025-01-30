<template>
    <div class="slider-container">
        <div class="slider">
            <img src="../assets/images/asian.png" alt="Image 1" />
            <img src="../assets/images/avatar.png" alt="Image 2" />
            <img src="../assets/images/bakery.png" alt="Image 3" />
            <img src="../assets/images/drinks.png" alt="Image 4" />
            <img src="../assets/images/burger.png" alt="Image 5" />
            <img src="../assets/images/chicken.png" alt="Image 6" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Slider",
    data() {
        return {
            index: 0,
            totalImages: 6, // Total number of images
        };
    },
    mounted() {
        setInterval(this.slideImages, 1000);
    },
    methods: {
        slideImages() {
            this.index++;

            // If we've reached the last set of images, reset to first set
            if (this.index >= this.totalImages - 2) {
                this.index = 0;
            }

            // Adjust the position of the slider to show the next 3 images
            const slider = this.$el.querySelector('.slider');
            slider.style.transform = `translateX(-${this.index * 33.33}%)`;
        },
    },
};
</script>

<style scoped>
.slider-container {
    width: 100%;
    overflow: hidden;
    /* Hides images outside of the container */
}

.slider {
    display: flex;
    /* Arrange images in a row */
    transition: transform 1s ease-in-out;
    gap: 1rem;
    /* Smooth sliding effect */
}

.slider img {
    width: 33.33%;
    /* Show three images at a time */
    height: auto;
}
</style>
