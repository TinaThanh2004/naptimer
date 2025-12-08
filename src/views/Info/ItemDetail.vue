<script setup>
import { useRoute } from 'vue-router'
import portfolioData from '@/data/portfolio.json'

const route = useRoute()
const itemId = Number(route.params.portfolioId)

const itemData = portfolioData.find(item => item.id === itemId)

console.log('DETAIL PARAM:', route.params.portfolioId)
console.log('JSON:', portfolioData)
</script>

<template>
  <div class="page" v-if="itemData">

    <img class="hero" :src="itemData.thumbnail" :alt="itemData.title" />

    <h1 class="name">{{ itemData.title }}</h1>

    <div class="info-box">
      <p><strong>Quote </strong> {{ itemData.quote }}</p>
      <p><strong>Year Created:</strong> {{ itemData.when_created }}</p>
    </div>

    <router-link class="back" :to="{ name: 'nap-cats' }">
      ← Back to Gallery
    </router-link>

  </div>

  <p v-else>Sorry, this item doesn’t exist.</p>
</template>

<style scoped>
.page {
  padding: 16px;
}

.hero {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 14px;
}


.name {
  font-size: 35px;
  font-family: "Fascinate Inline", system-ui;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 10px;
  color: #08003a;
}

.info-box {
  background: #2b2278;
  padding: 16px;
  color: #4267b2;
  border-radius: 12px;
  margin-top: 12px;
  line-height: 1.6;
}

.back {
  display: inline-block;
  margin-top: 20px;
  color: #c0defc;
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
