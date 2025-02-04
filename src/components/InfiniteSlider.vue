<template>
    <section class="infinite-slider">
        <div class="infinite-slider-wrapper">
            <img class="slide slide1" src="../assets/images/slide1.png" alt="">
            <img class="slide slide2" src="../assets/images/slide2.png" alt="">
            <img class="slide slide3" src="../assets/images/slide3.png" alt="">
            <img class="slide slide4" src="../assets/images/slide1.png" alt="">
            <img class="slide slide5" src="../assets/images/slide2.png" alt="">
            <img class="slide slide6" src="../assets/images/slide3.png" alt="">
        </div>
    </section>
</template>

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

.infinite-slider-wrapper {
    width: 100%;
    overflow: hidden;
    display: flex;
    gap: 8rem;
    width: max-content;
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

/* Unique animation delays */
.slide1 {
    animation-delay: 0s;
}

.slide2 {
    animation-delay: 5s;
}

.slide3 {
    animation-delay: 10s;
}

.slide4 {
    animation-delay: 15s;
}

.slide5 {
    animation-delay: 20s;
}

.slide6 {
    animation-delay: 25s;
}
</style>