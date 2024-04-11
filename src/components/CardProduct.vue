<template>
    <div class="card">
      <header class="card-header" v-if="!loading">
        <p class="card-header-title">Media List</p>
        <b-skeleton :animated="animated" :active="loading" width="20%" >  </b-skeleton>
      </header>
      <div class="card-content">
        
        <div class="media" >
          <div class="media-content" v-if="!loading">
            <p class="title is-4">John Smith</p>
          </div>
          <b-skeleton :animated="animated" :active="loading" width="20%" >  </b-skeleton>
        </div>
        
        <div class="content" v-if="!loading" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-01-01">11:09 PM - 1 Jan 2016</time>
        </div>
        <b-skeleton :animated="animated" :active="loading" width="80%" >  </b-skeleton>
        <b-skeleton :animated="animated" :active="loading" width="20%" >  </b-skeleton>
      </div>
    </div>
</template>
  

<script>
export default {
    data() {
        return {
            data: [ 
            ],
            animated: true,
            loading:true
        }
    },
    mounted() {
        setInterval(() => {
            this.loading = !this.loading
        }, 12 * 1000)
  }   
}
</script>