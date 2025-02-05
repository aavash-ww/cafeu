<template>
    <section class="infinite-slider">
        <div class="slider-container">
            <div class="infinite-slider-wrapper">
                <img v-for="(slide, index) in duplicatedSlides" :key="index" class="slide" :src="slide" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                "/src/assets/images/slide1.png",
                "/src/assets/images/slide2.png",
                "/src/assets/images/slide3.png"
            ]
        };
    },
    computed: {
        duplicatedSlides() {
            return [...this.slides, ...this.slides];
        }
    }
};
</script>

<style scoped>
.infinite-slider {
    width: 100%;
    overflow: hidden;
    margin-bottom: 4rem;
    background-image: url("/src/assets/images/bg-cafeu.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 12rem;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slider-container {
    width: 100%;
    overflow: hidden;
    position: relative;
}


.infinite-slider-wrapper {
    display: flex;
    gap: 4rem;
    width: 200%;
    animation: scrollLeft 30s linear infinite;
}

@keyframes scrollLeft {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}


.slide {
    width: 150px;
    height: 56px;
    flex-shrink: 0;
}
</style>
