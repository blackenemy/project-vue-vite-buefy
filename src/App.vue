<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import Form from "./components/Form.vue";
import FormFooter from "./components/FormFooter.vue";
import FormCard from "./components/Card.vue";
import CardProduct from "./components/CardProduct.vue";
import FormSlides from "./components/FormSlide.vue";
import FormContacts from "./components/Contact.vue";
</script>

<style scoped>
hr {
  background: blue;
}
</style>
