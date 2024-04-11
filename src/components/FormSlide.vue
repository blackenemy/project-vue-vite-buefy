<template>
    <section  class="section">

        <b-carousel
            :progress="progress"
            :progress-type="progressType"
            v-if="!loading">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero is-medium is-${carousel.color}`">
                    <div class="hero-body has-text-centered">
                        <h1 class="title">{{carousel.title}}</h1>
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>
        <b-skeleton :animated="animated" :active="loading" height="150px"></b-skeleton>
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

const progress = true
const progressType = 'is-primary'
const carousels = [
    { title: 'Slide 1', color: 'grey' },
    { title: 'Slide 2', color: 'dark' },
    { title: 'Slide 3', color: 'primary' },
    { title: 'Slide 4', color: 'info' }
]

</script>