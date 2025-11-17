<template>
  <div class="page">
    <h1 class="alert-title">Wake up!!</h1>

    <div class="flash-box">
      <button @click="backHome">PRESS TO STOP</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import AlarmSound from '@/picture/alarm.mp3'

const router = useRouter()
const audio = new Audio(AlarmSound)
audio.loop = true

onMounted(() => {
  audio.play().catch(() => {
  })
})

function backHome() {
  audio.pause()
  audio.currentTime = 0
  router.push({ name: 'nap-home' })
}

onUnmounted(() => {
  audio.pause()
  audio.currentTime = 0
})
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Rubik+Scribble&display=swap');

.page {
  text-align: center;
  font-family: 'Rubik Scribble', monospace;
  color: #4267b2;

}

.alert-title {
  font-size: 60px;
  font-weight: bold;
  color: #4267b2;
}

.flash-box {
  animation: flash-bg 0.6s infinite alternate;

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

@keyframes flash-bg {
  from { background-color: #f8bcbc; }
  to { background-color: #ffdcdc; }
}

button {
  padding: 0.5rem 1rem;
  border: none;
  background: #ff6262;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}

button:hover {
  background: #ff4343;
  transform: scale(1.05);
}
</style>

