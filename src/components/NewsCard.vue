<template>
    <div class="newscard-slider">
        <div class="newscard-container"
            :style="isMediumScreen ? { transform: `translateX(-${currentIndex * 100}%)` } : {}">
            <div v-for="(el, index) in data" :key="index" class="newscard">
                <div class="news-image-content">
                    <img :src="el.image" alt="">
                </div>
                <div class="news-text-content">
                    <h3>{{ el.title }}</h3>
                    <p>Drive your business and manage risks with a global industry leader.</p>
                    <div class="news-date-section">
                        <div class="date">{{ el.date }}</div>
                        <div class="read-more">Read More</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slieder Button -->
        <div v-if="isMediumScreen" class="slider-controls">
            <button v-for="(el, index) in data" :key="index" @click="setSlide(index)"
                :class="{ active: index === currentIndex }"></button>
        </div>
    </div>
</template>

<script>
import data from "../data/newscard.json";

export default {
    data() {
        return {
            data,
            currentIndex: 0,
            autoSlideInterval: null,
            isMediumScreen: false, 
        };
    },
    methods: {
        checkScreenSize() {
            this.isMediumScreen = window.innerWidth < 768; 
            if (!this.isMediumScreen) {
                clearInterval(this.autoSlideInterval); 
                this.currentIndex = 0; 
            } else {
                this.startAutoSlide();
            }
        },
        startAutoSlide() {
            if (this.isMediumScreen) {
                this.autoSlideInterval = setInterval(() => {
                    this.nextSlide();
                }, 4000);
            }
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.data.length;
        },
        setSlide(index) {
            clearInterval(this.autoSlideInterval);
            this.currentIndex = index;
            this.startAutoSlide();
        }
    },
    mounted() {
        this.checkScreenSize();
        window.addEventListener("resize", this.checkScreenSize);
    },
    beforeUnmount() {
        clearInterval(this.autoSlideInterval);
        window.removeEventListener("resize", this.checkScreenSize);
    }
};
</script>