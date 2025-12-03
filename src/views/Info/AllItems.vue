<script setup>
import portfolioData from "@/data/portfolio.json";
</script>

<template>
  <h1 class="title">Sleepy Cat Gallery</h1>

  <div class="container">
    <div
      class="preview-card"
      v-for="cat in portfolioData"
      :key="cat.id"
    >
      <img class="thumb" :src="cat.thumbnail" :alt="cat.name" />
      <h2>{{ cat.name }}</h2>

      <router-link :to="{ name: 'ItemDetail', params:{ portfolioId: portfolioItem.id}}">Learn More</router-link>

    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 0 16px;
}

.preview-card {
  border-radius: 12px;
  padding: 16px;
  background: #fafafa;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  text-align: center;
}

.thumb {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.learn-more {
  display: inline-block;
  margin-top: 8px;
  font-weight: 600;
  color: #6a5acd;
  text-decoration: none;
}

@media (min-width: 600px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
