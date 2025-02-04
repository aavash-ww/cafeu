<template>
    <div>
        <!-- Hero Section  -->
        <section>
            <HeroSection />
        </section>
        <!--Discover Card Section  -->
        <section>
            <DiscoverCard />
        </section>
        <!-- Special Offers -->
        <section class="special-offers-container">
            <div class="special-offer-wrapper">
                <div class="special-offer-text-content">
                    <h3>Stay Informed About Special Offers</h3>
                    <p>For Exclusive Deals, Coupons, News and More!</p>
                </div>
                <div class="special-offer-mail">
                    <div class="special-offer-input-container"><input type="text" placeholder="Enter Your Mail"></div>

                    <div class="special-offer-submit-icon">
                        <img src="../assets/icons/cursor-up-left-svgrepo-com.svg" alt="">
                    </div>

                </div>
            </div>

        </section>
        <!-- About Us Section  -->
        <section class="about-section">
            <div class="about-wrapper">
                <div class="about-image">
                    <img src="../assets/images/about-image.png" alt="">
                </div>
                <div class="about-content">
                    <div class="about-text-content">
                        <h4>About Us</h4>
                        <h3>Why We Are The Best</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente consectetur quibusdam
                            pariatur quia! Itaque quae quidem voluptas a libero deserunt. Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Architecto, incidunt! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Sint sapiente cum corporis velit doloremque nam ullam voluptate molestias,
                            .</p>
                    </div>
                    <div class="about-subsection" v-for="(data, index) in aboutdata" :key="index">
                        <div class="about-subsection-wrapper">
                            <div class="about-subsection-icon">
                                <img :src="data.icon" alt="">
                            </div>
                            <div class="about-subsection-text">
                                <h5>{{ data.title }}</h5>
                                <p>{{ data.description }}</p>
                            </div>
                        </div>

                    </div>
                    <div class="button-container">
                        <button>
                        About Us
                    </button>
                    </div>
                </div>
            </div>

        </section>
        <!-- Special Menu Section  -->
        <section class="special-menu-container">
            <div class="special-menu-wrapper ">
                <div class="special-top-header">
                    <h4>Special Menu</h4>
                    <h3>Our Specials Menu</h3>
                </div>
                <div class="special-menu-bar">
                    <div class="special-menu-nav" v-for="(data, index) in menuicons" :key="index">
                        <div class="special-menu-icon">
                            <img :src="data.icon" alt="">
                        </div>
                        <h4>{{ data.title }}</h4>
                    </div>
                </div>
                <FoodCard />
            </div>
        </section>
        <!-- PlayStore section  -->
        <section class="playstore-section">
            <div class="palystore-wrapper">
                <div class="playstore-text">
                    <h3>Simple Way to Order Your Food Faster</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius-
                        mod tempor incididunt ut labore et dolore magna aliqua. Q ipsum suspendisse ultrices
                        gravida. Risus commodo viverra maeceas accumsan lacus vel facilisis</p>
                    <div class="get-it-on">
                        <img src="../assets/icons/play-store.png" alt="">
                        <img src="../assets/icons/apple.png" alt="">
                    </div>
                </div>
                <div class="playstore-mobile-screens">
                    <img class="app1" src="../assets/images/app-1.png" alt="">
                    <img class="app2" src="../assets/images/app-2.png" alt="">
                </div>
            </div>
        </section>
        <!-- Infinite Slider  -->
        <InfiniteSlider />
        <!-- Review Section  -->
        <section class="review-section">
            <div class="review-container container">
                <div class="review-heading">
                    <h4>Happy Cutomers</h4>
                    <h3>Our Guestbook</h3>
                </div>
                <ReviewCard />
            </div>
        </section>
        <!-- News and Blog  -->
        <section>
            <div class="news-section">
                <div class="news-wrapper container">
                    <div class="news-heading">
                        <h4>News & Blogs</h4>
                        <h3>Latest News</h3>
                    </div>
                    <NewsCard />
                </div>
            </div>
        </section>
    </div>

</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import DiscoverCard from '../components/DiscoverCard.vue';
import FoodCard from '../components/FoodCard.vue';
import ReviewCard from '../components/ReviewCard.vue';
import InfiniteSlider from '../components/InfiniteSlider.vue';
import NewsCard from '../components/NewsCard.vue';
import aboutdata from "../data/aboutdata.json";
import menuicons from "../data/specialmenudata.json"

export default {
    data() {
        return {
            aboutdata,
            menuicons
        }
    },
    components: {
        HeroSection,
        DiscoverCard,
        FoodCard,
        ReviewCard,
        InfiniteSlider,
        NewsCard
    }
}
</script>