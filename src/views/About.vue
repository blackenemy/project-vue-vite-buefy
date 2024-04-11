<template>
    <section class="hero is-primary is-medium">
   <!-- Hero head: will stick at the top -->
   <div class="hero-head">
     <nav class="navbar">
       <div class="container">
         <div class="navbar-brand">
           <a class="navbar-item">
             <img src="https://bulma.io/assets/images/bulma-type-white.png" alt="Logo" />
           </a>
           <span class="navbar-burger" data-target="navbarMenuHeroA">
             <span></span>
             <span></span>
             <span></span>
             <span></span>
           </span>
         </div>
         <div id="navbarMenuHeroA" class="navbar-menu">
           <div class="navbar-end">
             <router-link class="navbar-item" to="/">Home</router-link>
             <router-link class="navbar-item is-active" to="/about">About</router-link>
             <router-link class="navbar-item" to="/contact">Contact</router-link>
             <span class="navbar-item">
               <a class="button is-primary is-inverted">
                 <span class="icon">
                   <i class="fab fa-github"></i>
                 </span>
                 <span>Download</span>
               </a>
             </span>
           </div>
         </div>
       </div>
     </nav>
   </div>
 
   <!-- Hero content: will be in the middle -->
   <div class="hero-body">
     <div class="container has-text-centered">
       <p class="title">About</p>
       <br>
       <p class="subtitle">Vue Buefy</p>
     </div>
   </div>
 </section>
<FormIcon></FormIcon>
 </template>

<script setup>
import FormIcon from "../components/FormIcon.vue"

</script>