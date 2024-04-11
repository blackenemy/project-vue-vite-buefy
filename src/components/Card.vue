<template>
  <section  class="section">
    <div class="container">
      <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
        <template #trigger="props">
          <div class="card-header" role="button" aria-controls="contentIdForA11y3" :aria-expanded="props.open">
            <p class="card-header-title" v-if="!loading">Name List</p>
            <a class="card-header-icon" v-if="!loading">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
            </a>
            <b-skeleton :animated="animated" :active="loading" width="20%">
            </b-skeleton>
          </div>
        </template>
      <div class="card-content">
          <div class="content">
            <table>
              <tbody v-if="!loading">
                <tr v-for="(item, index) in paginatedData" :key="index">
                  <td>ID {{ item.id  }} </td>
                  <td> Title <br> {{ item.title }}</td>
                  <td> Body <br>{{ item.body }}</td>
                  <img :src="getImgUrl(item.id)" alt="Post Image" />
                </tr>
              </tbody>
              <b-skeleton :animated="animated" :active="loading" width="100%" >  </b-skeleton>
            </table>
            
          </div>
          <nav class="pagination" role="navigation" aria-label="pagination" v-if="!loading">
            <button class="pagination-previous" :disabled="current === 1" @click="prevPage">
              <b-icon
                icon="arrow-left"
                size="is-small"
                type="is-primary">
            </b-icon>
              {{ prevIcon }}
            </button>
            <button class="pagination-next" :disabled="current === totalPages" @click="nextPage">
              <b-icon
                icon="arrow-right"
                size="is-small"
                type="is-primary">
            </b-icon>
              {{ nextIcon }}
            </button>
            <ul class="pagination-list">
              <li v-for="pageNumber in totalPages" :key="pageNumber">
                <button class="pagination-link" :class="{ 'is-current': pageNumber === current }"
                  @click="changePage(pageNumber)">
                  {{ pageNumber }}
                </button>
              </li>
            </ul>
            
          </nav>
          <b-skeleton :animated="animated" :active="loading" width="20%" >  </b-skeleton>
        </div>
      </b-collapse>
    </div>
  </section>
</template>

<script setup>

import axios from "axios";
import { ref, onMounted, computed } from "vue";

const data = ref([]);
const dataImg = ref([]);
const totalPages = computed(() => Math.ceil(total.value / perPage.value));
const paginatedData = computed(() => {
  const startIndex = (current.value - 1) * perPage.value;
  const endIndex = startIndex + perPage.value;
  return data.value.slice(startIndex, endIndex);
});

const changePage = (pageNumber) => {
  current.value = pageNumber;
};
const nextPage = () => {
  if (current.value < totalPages.value) {
    current.value++;
  }
};
const prevPage = () => {
  if (current.value > 1) {
    current.value--;
  }
};

const total = ref(100);
const current = ref(10);
const perPage = ref(10);
const prevIcon = ref();
const nextIcon = ref();


// ข้อมูล api
const info = ref([]);
const img = ref([]);

const loading = ref(true);
const animated = ref(true);

const posts = {
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/posts",
};
axios
  .request(posts)
  .then((response) => {
    info.value = response.data;
    data.value = response.data;
    //console.log(info.value);
  })
  .catch((error) => {
    console.error(error);
  });

const apiphoto = {
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/photos",
};
axios
  .request(apiphoto)
  .then((response) => {
    img.value = response.data;
    dataImg.value = response.data;
    //console.log(img.value);
  })
  .catch((error) => {
    console.error(error);
  });

const getImgUrl = (postId) => {
  const postImg = img.value.find((item) => item.id === postId);
  console.log(postImg);
  return postImg ? postImg.thumbnailUrl : "";
};

onMounted(() => {
  setInterval(() => {
    loading.value = !loading.value;
  }, 12 * 1000);
});


</script>
