<template>
  <div class="page">
    <h1>Countdown...</h1>

    <div class="box timer">
      <span>{{ formattedTime }}</span>
    </div>

    <button disabled>Timer started...</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const timeLeft = ref(0)
let intervalId = null

const formattedTime = computed(() => {
  const m = Math.floor(timeLeft.value / 60)
  const s = timeLeft.value % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
})

onMounted(() => {
  const minutes = Number(localStorage.getItem('nap-time'))
  timeLeft.value = Math.round(minutes * 60)

  intervalId = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      clearInterval(intervalId)
      router.push('/nap/alarm')
    }
  }, 1000)
})

</script>


<style scoped>

.box {
  width: 300px;
  height: 200px;
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
@import url('https://fonts.googleapis.com/css2?family=Rubik+Scribble&display=swap');

.page {
  text-align: center;
  font-size: 30px;
  font-family: 'Rubik Scribble', monospace;
  color: #4267b2;

}

.timer {
  width: 300px;
  height: 200px;
  margin: 24px auto 32px;
  background: #d3e2f5;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  font-weight: bold;
  color: #333;
}


button {
  margin: 24px 30px;
  padding: 0.7rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  color: white;
  background-color: lightgray;
  cursor: not-allowed;
  opacity: 0.8;
  transition: transform 0.2s, background 0.2s;
}

button:disabled {
  background-color: lightgray;
  opacity: 0.6;
}

button:not(:disabled):hover {
  background-color: lightgray;
  transform: translateY(-2px);
}
</style>
