<template>
  <div class="page">
    <h1>Select Time</h1>

    <div class="box">
      <div class="grid-box">
        <button class="time-btn" @click="choose(0.1667)">10 sec</button>
        <button class="time-btn" @click="choose(30)">30 min</button>
        <button class="time-btn" @click="choose(60)">1 hour</button>
        <button class="time-btn" @click="choose(120)">2 hours</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function choose(minutes) {
  localStorage.setItem('nap-time', minutes)
  router.push({ name: 'nap-running' })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Scribble&display=swap');

.page {
  text-align: center;
  font-size: 30px;
  font-family: 'Rubik Scribble', monospace;
  color: #4267b2;

}

.box {
  width: 300px;
  height: 200px;
  margin: 24px auto 125px;
  background: #d3e2f5;
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

.grid-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.time-btn {
  padding: 10px;
  border: none;
  border-radius: 12px;
  background: #ffffff;
  color: #1a1a1a;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.time-btn:hover {
  background: #4267b2;
  transform: translateY(-2px);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
}

.grid-box button:nth-child(5) {
  grid-column: span 2;
}
</style>



