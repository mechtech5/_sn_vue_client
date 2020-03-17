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
        <div class="card">
          <div class="card-body">
            <h6 class="text-center card-subtitle mt-5 mb-2">Today's Top Growing Communities</h6>
            <ul class="list-group mb-2">
              <li class="list-group-item">1 Cras justo odio</li>
              <li class="list-group-item">2 Dapibus ac facilisis in</li>
              <li class="list-group-item">3 Morbi leo risus</li>
              <li class="list-group-item">4 Porta ac consectetur ac</li>
              <li class="list-group-item">5 Vestibulum at eros</li>
            </ul>
            <button type="button" class="text-primary btn btn-light ml-1">Sports</button>
            <button type="button" class="text-primary btn btn-light ml-1">Sports</button>
            <button type="button" class="text-primary btn btn-light ml-1">Sports</button>
            <button type="button" class="text-primary btn btn-light ml-1">Sports</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import parse from 'date-fns/parse'
import { mapState, mapActions } from 'vuex';
import PostLink from '@/components/PostLink';

export default {
  name: 'Home',
  components: {
    PostLink
  },
  data() {
    return {
      logged: false
    }
  },
  created() {
    this.index();
  },
  computed: {
    ...mapState('post_vuex', [
        'collection'
      ]),
  },
  methods: {
    ...mapActions('post_vuex', [
        'indexAction', 
        'showAction', 
        'storeAction', 
        'updateAction', 
        'destroyAction'
    ]),
    createPost() {
      this.$router.push('create');
    },
    index() {
      this.indexAction();
    },
  },
}
</script>