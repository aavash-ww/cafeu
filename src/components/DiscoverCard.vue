<template>
    <div class="discover-container ">
        <div class="discover-wrapper container">
            <div v-for="(card, index) in data" :key="index" class="discover-card-wrapper">
                <div class="discover-card">
                    <div class="discover-image">
                        <img :src="card.icon" :alt="card.title">
                    </div>
                    <h3 class="discover-card-title">{{ card.title }}</h3>
                    <p class="discover-card-description">{{ card.description }}</p>
                    <span class="discover-card-link">Discover More</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import data from '../data/discovercard.json'

export default {
    data() {
        return {
            data
        }
    }
} 
</script>