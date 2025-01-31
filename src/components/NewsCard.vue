<template>
    <div class="newscard-container">
        <div v-for="(el, index) in data" :key="index" class="newscard">
            <div class="news-image-content">
                <img :src="el.image" alt="">
            </div>
            <div class="news-text-content">
                <h3>{{ el.title }}</h3>
                <p>Drive your business and manage risks with a global industry leader.</p>
                <div class="news-date-section">
                    <div class="date">
                        {{ el.date }}
                    </div>
                    <div class="read-more">
                        Read More
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../data/newscard.json'
export default {
    data() {
        return {
            data
        }
    }
}
</script>