<script setup>
import catlogo from '@/picture/catlogo.png'
</script>


<template>
  <div class="container">
    <div class="logo">
      <img :src="catlogo" alt="CatLogo" />
    </div>
  </div>
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


<!--div.links {-->
<!--display: flex;-->
<!--flex-direction: column;-->
<!--gap: 10px;-->

<!--a {-->
<!--color: white;-->
<!--text-decoration: none;-->
<!--border: 1px solid white;-->
<!--padding: 10px;-->
<!--transition: all 0.2s;-->
<!--}-->

<!--a:hover {-->
<!--background-color: white;-->
<!--color: black;-->
<!--}-->
