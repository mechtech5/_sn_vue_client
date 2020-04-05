<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-8">

        <div class="card mb-3">
          <div class="card-body">
            <input
              @click="createPost"
              type="text"
              class="form-control"
              placeholder="Create Post">
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-9">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-star"></i> Top</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-certificate"></i> New</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-chart-line"></i> Rising</a>
                  </li>
                </ul>
              </div>
              <div class="col-3">
                <select name="" id="" class="form-control">
                  <option value="">Today</option>
                  <option value="">This Week</option>
                  <option value="">This Month</option>
                  <option value="">All Time</option>
                </select>
              </div>
            </div>
          </div>

          <div class="card-body">
            <span v-for="entity in collection" :key="entity.id">
              <PostLink :post="entity" />
            </span>
          </div>
        </div>
        
      </div>

      <div class="col-4">
        <div class="w-75 m-auto">
          <input type="text" class="form-control form-control-lg" placeholder="Topics">
          <br>
          <div>
            <img
              src="https://via.placeholder.com/32"
              class="profile-link rounded-circle" />
            <span class="ml-2 mt-3">Topic Name</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import parse from 'date-fns/parse'
import { mapState } from 'vuex';
import PostLink from '@/components/PostLink';

export default {
  name: 'Home',
  components: {
    PostLink
  },
  data() {
    return {
      env: process.env
    }
  },
  created() {
    this.$store.dispatch('post_vuex/index');
  },
  computed: {
    ...mapState('post_vuex', ['collection']),
  },
  methods: {
    createPost() {
      this.$router.push('create');
    }
  },
}
</script>