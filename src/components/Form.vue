<template>
 <section class="section" >
  <h1 class="title" v-if="!loading" >Section</h1>
  <b-skeleton :animated="animated" :active="loading" width="10%" >  </b-skeleton>
  <br>
  <h2 class="subtitle" v-if="!loading">
    A simple container to divide your page into <strong>sections</strong>, like
    the one you're currently reading.
  </h2>
  <b-skeleton :animated="animated" :active="loading" width="50%" ></b-skeleton>
  <button class="button is-link is-rounded" v-if="!loading" >Rounded</button>
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
