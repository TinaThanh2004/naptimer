<template>
  <div class="page">
    <h1 class="alert-title">Wake up!!</h1>

    <div class="flash-box">
      <button @click="backHome">
        STOP ALARM
      </button>
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
  audio.play().catch(() => {})
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
.page {
  text-align: center;
  font-family: "Fascinate Inline", system-ui;
  font-weight: 400;
  font-style: normal;
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
  from { background-color: #08003a; }
  to { background-color: #30247a; }
}

button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem 1rem;
  border: none;
  background: #4267b2;
  border-radius: 10px;
  color: #c0defc;
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
