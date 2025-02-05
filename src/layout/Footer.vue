<template>
    <footer class="footer">
        <div class="footer-wrapper ">
            <div class="footer-content-first">
                <img class="footer-logo" src="../assets/images/cafeulogo2.png" alt="">
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <div class="location">
                    <img src="../assets/icons/location-svgrepo-com.svg" alt="">
                    <span>New Road, Kathmandu</span>
                </div>
                <div class="mail">
                    <img src="../assets/icons/mail-svgrepo-com.svg" alt="">
                    <span>thapaaavash@gmail</span>
                </div>
                <div class="phone">
                    <img src="../assets/icons/phone-svgrepo-com.svg" alt="">
                    <span>+977 9863788334</span>
                </div>
            </div>
            <div class="footer-content-second">
                <h3>Quick Links</h3>
                <div class="under-line"></div>
                <ul>
                    <li>About Us</li>
                    <li>Menu</li>
                    <li>Blogs</li>
                    <li>Services</li>
                    <li>Gallery</li>
                    <li>FAQ</li>

                </ul>
            </div>
            <div class="footer-content-third">
                <h3>Instagram</h3>
                <div class="under-line"></div>
                <div class="footergrid">
                    <div v-for="(image, index) in images" :key="index" class="grid">
                        <img :src="image" alt="">
                    </div>
                </div>
            </div>
            <div class="footer-content-fourth">
                <h3>Subscribe</h3>
                <div class="under-line"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, Lorem ipsum dolor sit amet
                    consectetur ,</p>
                <div class="subscribe">
                    <div>
                        <input type="text" placeholder="Subscribe">
                    </div>
                    <div class="subscribe-btn">
                        Subscribe
                    </div>

                </div>
                <div class="links">
                    <img src="../assets/icons/facebook-boxed-svgrepo-com.svg" alt="">
                    <img src="../assets/icons/insta-svgrepo-com.svg" alt="">
                    <img src="../assets/icons/twitter-154-svgrepo-com.svg" alt="">
                </div>
            </div>
        </div>
        <div class="copyrights">
            @Copyright Cafeu. 2025 All Right Reserved
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            images: [
                "/src/assets/images/chicken.png",
                "/src/assets/images/asian.png",
                "/src/assets/images/drinks.png",
                "/src/assets/images/bakery.png",
                "/src/assets/images/chicken.png",
                "/src/assets/images/chicken.png",
            ]
        }
    }
}
</script>