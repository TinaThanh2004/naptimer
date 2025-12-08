<script setup>
import catlogo from '@/picture/catlogoother.png'
import MyButton from './MyButton.vue'
</script>

<template>
  <header class="top-area">
    <div class="container">
      <div class="logo">
        <img :src="catlogo" alt="Cat Logo" />
      </div>
    </div>

    <nav>
      <MyButton link-text="Home" route-name="nap-home" theme="primary" />
      <MyButton link-text="Select" route-name="nap-select" />
      <MyButton link-text="Running" route-name="nap-running" />
      <MyButton link-text="Alarm" route-name="nap-alarm" />
      <MyButton link-text="Cats" route-name="nap-cats" />
    </nav>
  </header>
</template>

<style scoped>
.top-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  width: 100%;
}

.container {
  display: flex;
  justify-content: center;
}

.logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 22px;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

nav {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
</style>
