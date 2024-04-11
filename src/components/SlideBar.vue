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
                            <router-link class="navbar-item is-active" to="/">Home</router-link>
                            <router-link class="navbar-item" to="/about">About</router-link>
                            <router-link class="navbar-item" to="/contact">Contact</router-link>
                            <span class="navbar-item">
                                <a href="https://github.com/blackenemy/project-vue-vite-buefy.git" class="button is-primary is-inverted">
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
                <p class="title">Home</p>
                <br>
                <p class="subtitle">Section, Card, Slids</p>
            </div>
        </div>
        <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li >
            <router-link class="navbar-item " to="/">Overview</router-link>
          </li>
          <li >
            <router-link class="navbar-item " to="/modifiers">Modifiers</router-link>
          </li>
          <li class="is-active">
            <a>Slids</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
    </section>
    <main>
    <FormSlide/>
  <FormFooter />
  </main>
</template>
<script setup>
import FormSlide from "../components/FormSlide.vue";
import FormFooter from "../components/FormFooter.vue";
</script>