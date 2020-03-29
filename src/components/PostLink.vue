<template>
  <div class="row">
    <div class="col-2">
      <div class="row">
        <div class="col-4">
          <img
            @click="showProfile(post.user.username)"
            src="https://via.placeholder.com/32"
            class="profile-link mt-2 rounded-circle"
            :alt="post.user.username" />
        </div>
        <div class="col-8">
          <div class="text-center">
            <i class="fas fa-chevron-up"></i>
            <p style="font-size: 0.8em">123</p>
          </div>
        </div>
      </div>
      
      
    </div>
    <div class="col-10">
      <div class="mb-4">
        <span class="post-link" @click="showPost(post.slug)">{{ post.title }}</span>
        <div class="text-muted small">
          <span class="post-link" @click="showPost(post.slug)">{{ post.user.username }}</span> .
          <span class="post-link">Topic</span> .
          <span :title="post.created_at" class="post-link" @click="showPost(post.slug)">{{ post.created_at }}</span> . 
          <span title="View Comments" class="post-link" @click="showPost(post.slug)">83 comments</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    showProfile(username) {
      alert('show profile');
    },
    showPost(slug) {
      this.$router.push({ path: `/post/${slug}` });
    }
  }
}
</script>

<style scoped>
.profile-link {
  cursor: pointer;
}
.like {
  cursor: pointer;
}
.post-link {
  cursor: pointer;
}
.post-link:hover {
  color: crimson;
}
</style>