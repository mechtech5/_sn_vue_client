<template>
  <div class="Post__Wrapper">
    <div class="card mb-3" 
      @click="focusPost(post.slug)"
      v-for="post in posts" :key="post.id"
      :title="post.title"
      :sub-title="post.created_at">
      <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted" style="font-size: 0.8em;">
          <b>Topic</b> . Posted by {{ post.user.name }} {{ post.created_at }}
        </h6>

        <h5 class="card-title">{{ post.title }}</h5>
        
        <p class="card-text text-truncate mb-2">{{ post.body }}</p>
        <span
          v-for="tag in post.tags"
          :key="tag.id"
          class="badge badge-primary ml-1">{{ tag.name }}</span>

      </div>
    </div>
  </div>
</template>

<script>
import parse from 'date-fns/parse'

export default {
  props: ['posts'],
  methods: {
    focusPost(slug) {
      this.$router.push({ path: `/post/${slug}` });
    },
    // formatDate(date) {
    //   return parse(date, 'yyyy-MM-dd', new Date());
    // }
  },
  computed: {
    
  }
}
</script>

<style>

</style>