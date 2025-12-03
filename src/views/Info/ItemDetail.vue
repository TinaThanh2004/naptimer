<script setup>
import { useRoute } from "vue-router";
import portfolioData from "@/data/portfolio.json";

const route = useRoute();
const itemData = portfolioData.find(
  cat => cat.id === Number(route.params.portfolioId)
);
</script>

<template>
  <div v-if="itemData" class="page">

    <img class="hero" :src="itemData.image" :alt="itemData.name" />

    <h1 class="name">
      {{ itemData.name }}
      <svg class="paw" viewBox="0 0 24 24">
        <path d="M12 12c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4-2c.8 0 1.5-.7 1.5-1.5S8.8 7 8 7s-1.5.7-1.5 1.5S7.2 10 8 10zm8 0c.8 0 1.5-.7 1.5-1.5S16.8 7 16 7s-1.5.7-1.5 1.5S15.2 10 16 10zm-6 .5c-.9 0-1.7-.8-1.7-1.7S9.1 7 10 7s1.7.8 1.7 1.7S10.9 10.5 10 10.5zm4 0c-.9 0-1.7-.8-1.7-1.7S13.1 7 14 7s1.7.8 1.7 1.7S14.9 10.5 14 10.5z"/>
      </svg>
    </h1>

    <div class="info-box">
      <p><strong>Nap Pose:</strong> {{ itemData.pose }}</p>
      <p><strong>Nap Location:</strong> {{ itemData.location }}</p>
      <p><strong>Nap Duration:</strong> {{ itemData.duration }}</p>
      <p><strong>Mood:</strong> {{ itemData.mood }}</p>
      <p><strong>Favorite Blanket:</strong> {{ itemData.blanket }}</p>
      <p><strong>Sleep Sound:</strong> {{ itemData.sound }}</p>
    </div>

    <router-link class="back" :to="{ name: 'Portfolio' }">← Back to Gallery</router-link>

  </div>

  <p v-else>Sorry, this cat doesn’t exist.</p>
</template>

<style scoped>
.page {
  padding: 16px;
}

.hero {
  width: 100%;
  border-radius: 14px;
  margin-bottom: 16px;
}

.name {
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
}

.paw {
  width: 24px;
  height: 24px;
  fill: #ff9fb6;
}

.info-box {
  background: #fff4f6;
  padding: 16px;
  border-radius: 12px;
  margin-top: 12px;
  line-height: 1.6;
  border: 1px solid #ffd4df;
}

.back {
  display: inline-block;
  margin-top: 20px;
  color: #6a5acd;
  font-weight: 600;
  text-decoration: none;
}

@media (min-width: 700px) {
  .page {
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>

