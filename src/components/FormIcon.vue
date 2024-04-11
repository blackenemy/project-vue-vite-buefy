<template>
 <section class="section" >
  <h1 class="title" v-if="!loading" >Vue 3 </h1>
  <b-skeleton :animated="animated" :active="loading" width="10%" >  </b-skeleton>
  <br>
  <h2 class="subtitle" v-if="!loading">
    Vue.js เป็นเฟรมเวิร์ก JavaScript ส่วนหน้าแบบโอเพ่นซอร์สที่สามารถใช้สร้างส่วนต่อประสานกับผู้ใช้ 
    เฟรมเวิร์กนำเสนอวิธีการเขียนโค้ดแบบประกาศและตามองค์ประกอบที่ช่วยในการพัฒนาการแสดงผลของผู้ใช้อย่างรวดเร็ว 
    สามารถใช้ในการพัฒนาอินเทอร์เฟซพื้นฐานหรือซับซ้อน และสร้างขึ้นจาก HTML, CSS และ JavaScript มาตรฐานอุตสาหกรรม 
    
  </h2>
  <b-skeleton :animated="animated" :active="loading" width="50%" ></b-skeleton>
  <b-skeleton :animated="animated" :active="loading" width="50%" ></b-skeleton>
  <b-skeleton :animated="animated" :active="loading" width="50%" ></b-skeleton>
  <a href="https://vuejs.org/" class="button is-link is-rounded" v-if="!loading" >Vue Docs</a>
  <b-skeleton :animated="animated" :active="loading" width="10%" >  </b-skeleton>
</section>

<section class="section" >
  <h1 class="title" v-if="!loading" >Buefy</h1>
  <b-skeleton :animated="animated" :active="loading" width="10%" >  </b-skeleton>
  <br>
  <h2 class="subtitle" v-if="!loading">
    Buefy เป็นไลบรารี UI สำหรับ Vue.js ที่ออกแบบมาเพื่อช่วยให้การพัฒนาเว็บแอปพลิเคชัน Vue.js เป็นเรื่องง่ายและรวดเร็วขึ้น 
    มันให้คุณสร้างอินเทอร์เฟซผู้ใช้สวยงามและสมบูรณ์ได้โดยไม่ต้องใช้เวลาหรือความขัดแย้งในการสร้างส่วนประสมของ UI จากศูนย์ขึ้นมาใหม่ทั้งหมด
    
  </h2>
  <b-skeleton :animated="animated" :active="loading" width="50%" ></b-skeleton>
  <b-skeleton :animated="animated" :active="loading" width="50%" ></b-skeleton>
  <b-skeleton :animated="animated" :active="loading" width="50%" ></b-skeleton>
  <a href="https://buefy.org/" class="button is-link is-rounded" v-if="!loading" >Vue Docs</a>
  <b-skeleton :animated="animated" :active="loading" width="10%" >  </b-skeleton>
</section>
</template>

<script setup>
import { ref,onMounted } from "vue";

const loading = ref(true);
const animated = ref(true);
onMounted(() => {
    setInterval(() => {
        loading.value = !loading.value
    }, 12 * 1000)
})
</script>


<style>
</style>
