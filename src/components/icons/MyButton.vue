<script setup>
defineProps({
  linkText: { type: String, default: 'Button' },
  routeName: { type: String, required: true },
  routeParams: { type: Object, default: () => ({}) },
  theme: { type: String, default: 'secondary' }
})
</script>

<template>
  <router-link :to="{ name: routeName, params: routeParams }" :class="theme">
    {{ linkText }}
  </router-link>
</template>


<style scoped>
a {
  padding: 5px 10px;
  border: white 1px solid;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
}

a {
  background-color: #4267b2;
  color: white;
}

a:hover {
  background-color: white;
  color: #4267b2;
}


</style>
