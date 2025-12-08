<script setup>
import portfolioData from '@/data/catsinfo.json'
</script>

<template>
  <h1 class="title">Sleeping Cats for Serotonin</h1>

  <div class="container">
    <router-link
      v-for="item in portfolioData"
      :key="item.id"
      class="preview-card"
      :to="{ name: 'nap-cat-detail', params: { portfolioId: item.id } }"
    >
      <img class="thumb" :src="item.thumbnail" :alt="item.title" />
      <h2 class="name">{{ item.title }}</h2>
      <span class="learn-more">Learn More</span>
    </router-link>
  </div>
</template>

<style scoped>
.title {
  font-size: 35px;
  font-family: "Fascinate Inline", system-ui;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  margin-bottom: 20px;
  color: #4267b2;
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 0 16px;
  color: #4267b2;
}

.preview-card {
  display: block;
  border-radius: 12px;
  padding: 16px;
  background: #08003a;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  text-align: center;
  color: #c0defc;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.preview-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.thumb {
  width: 100%;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
}

.name {
  margin-top: 10px;
  margin-bottom: 4px;
  font-weight: 700;
  color: #c0defc;
}

.learn-more {
  display: inline-block;
  margin-top: 8px;
  font-weight: 600;
  color: #9ad1ff;
  transition: color 0.2s;
}

.preview-card:hover .learn-more {
  color: #ffffff;
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
