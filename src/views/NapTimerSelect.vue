<template>
  <div class="page">
    <h1>
      <img src="@/picture/alarm.svg" alt="alarm icon" class="title-icon" />
      Select Time
      <img src="@/picture/alarm.svg" alt="alarm icon" class="title-icon" />
    </h1>

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

.page {
  text-align: center;
  font-size: 25px;
  font-family: "Fascinate Inline", system-ui;
  font-weight: 400;
  font-style: normal;
  color: #4267b2;
}

.title-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
}

.box {
  width: 300px;
  height: 200px;
  margin: 24px auto 125px;
  background: #08003a;
  padding: 0 30px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
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
  background: #08003a;
  color: #c0defc;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  transition: all 0.2s;
}

.time-btn:hover {
  background: #4267b2;
  color: #c0defc;
  transform: translateY(-2px);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
}

.grid-box button:nth-child(5) {
  grid-column: span 2;
}
</style>



