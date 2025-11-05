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
    gap: 10px;

    > * {
      border: 1px solid white;
    }

    .content {
      background-color: lightgray;
      color: black;
      padding: 10px;
      border-radius: 10px;

      p {
        &:first-of-type {
          margin-top: 0;

        }

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
