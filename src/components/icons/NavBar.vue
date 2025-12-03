<script setup>
import catlogo from '@/picture/catlogo.png'
</script>

<template>
  <div class="container">
    <div class="logo">
      <img :src="catlogo" alt="CatLogo" />
    </div>
  </div>
  <nav>
    <my-button link-text="Home" route-name="Home" theme="primary"/>
    <my-button link-text="Select" route-name="AboutMe"/>
    <my-button link-text="Running" route-name="MultiplicationTable"/>
    <my-button link-text="Alarm" route-name="Portfolio"/>
    <my-button link-text="Cats" route-name="Cats"/>
  </nav>
</template>

<style scoped>
div.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 0;
}

div.logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

  @media (min-width: 650px) {
    flex-direction: row;
  }

</style>


<style scoped>
nav {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  /* code here would apply to the contents of nav (like the links) */

  a {
    text-decoration: none;

    &.router-link-active {
      font-weight: bold;
      text-decoration: underline;
    }
  }
}
</style>
