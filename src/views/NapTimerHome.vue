<template>
  <div class="page">
    <h1>Nap Timer</h1>

    <div class="box placeholder">
      Hello!! This is Nap Timer
    </div>

    <button @click="$router.push({ name: 'nap-select' })">
      Set Timer
    </button>
  </div>
</template>

<script setup>
</script>

<style scoped>

.page {
  text-align: center;
  font-size: 30px;
  font-family: "Fascinate Inline", system-ui;
  font-weight: 400;
  font-style: normal;
  color: #4267b2;

}

.box {
  width: 300px;
  height: 200px;
  margin: 24px auto 30px;
  background:#2b2278;
  padding: 0 30px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: "JetBrains Mono", monospace;
  font-weight: bold;
  color: #4267b2;
  text-align: center;
  line-height: 1.2;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

button {
  padding: 13px 29px;
  border: none;
  background: #4267b2;
  color: #c0defc;
  border-radius: 12px;

  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
  margin: 24px 30px;
}

button:hover {
  background: #365a9c;
  transform: translateY(-3px);
}

</style>
