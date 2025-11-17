<script setup>
import NavBar from '@/components/icons/NavBar.vue'
</script>

<template>
  <section class="container">
    <header>
      <nav-bar/>
    </header>

    <section class="content">
      <router-view />
    </section>

    <footer>Made by Tina</footer>
  </section>
</template>

<style scoped>
body {
  section.container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 700px;
    height: 200px;
    margin: 24px auto;


    .content {
      background-color: white;
      color: black;
      padding: 10px;
      border-radius: 10px;


      }
    }
  }

footer {
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  margin-top: auto;
}
</style>
