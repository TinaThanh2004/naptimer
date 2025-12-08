<script setup>
import NavBar from '@/components/icons/NavBar.vue'
</script>

<template>
  <div class="layout">
    <NavBar />

    <main class="content">
      <router-view />
    </main>

    <footer>
      Made by Tina
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

.content {
  flex: 1;
  background-color: #1f1a4f;
  color: black;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}

footer {
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
  opacity: 0.8;
}
</style>
