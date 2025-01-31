<template>
  <div class="hero-section">
    <div class="hero-wrapper container">
      <div class="hero-container">
        <div class="hero-content">
          <div class="text-content">
            <h4 class="hero-preheading">Best In Cafeu</h4>

            <h1 class="hero-heading">{{ slides[currentIndex].title }}</h1>

            <p>{{ slides[currentIndex].description }}</p>
          </div>
          <div class="order-container">
            <div class="order-button">Order Now</div>
            <div class="play-icon"><img src="../assets/icons/play-button-svgrepo-com.svg" alt=""
                class="play-icon-image">
            </div>
            <div class="watch text-accent">Watch Video</div>

          </div>
        </div>
        <div class="hero-image">
          <img :src="slides[currentIndex].image" :alt="slides.title">
        </div>
      </div>
      <div class="button-container">
        <button v-for="(slide, index) in slides" :key="index" class="slider-btn"
          :class="{ active: index === currentIndex }" @click="onButtonClick(index)">

        </button>
      </div>
    </div>
    <div class="bg-fillers">
      <img class="eggplant" src="../assets/icons/bg-hero/aubergine-brinjal-eggplant-svgrepo-com.svg" alt="">
      <img class="brocoli" src="../assets/icons/bg-hero/broccoli-brocoli-brocolli-svgrepo-com.svg" alt="">
      <img class="fork" src="../assets/icons/bg-hero/food-restaurant-svgrepo-com.svg" alt="">
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          title: "Different Spice For A Different Taste ",
          image: '/src/assets/images/slider1.png',
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptate error obcaecati adipisci quam alias, iure odio at incidunt asperiores."

        },
        {
          title: "Asian Lettuce Wrap Chicken Chopped Salad",
          image: "/src/assets/images/slider2.png",
          description: " Quis autem vel eum iure reprehenderit qui in evoluptate velit esse qua nihil molestiae consequatur,"

        },
        {
          title: "BBQ Chicken Salad With Creamy Avacado",
          image: "/src/assets/images/slider3.png",
          description: "BBQ Chicken Salad With Creamy Avacadoadipisci quam alias, iure odio at incidunt asperiores."
        },
      ], currentIndex: 0,
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
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
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