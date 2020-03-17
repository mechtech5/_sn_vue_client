<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-8">

        <div class="card mb-3">
          <div class="card-body">
            <router-link to="/create">
              <input type="text" class="form-control" placeholder="Create Post" />
            </router-link>
          </div>
        </div>
        
        <PostCard :posts="collection" />
        
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
import PostCard from '@/components/PostCard';

export default {
  name: 'Home',
  components: {
    PostCard
  },
  created() {
    this.index();
  },
  computed: {
    ...mapState(['collection']),
  },
  methods: {
    ...mapActions('post_vuex', [
        'indexAction', 
        'showAction', 
        'storeAction', 
        'updateAction', 
        'destroyAction'
    ]),
    index() {
      this.indexAction();
    },
  },
}
</script>