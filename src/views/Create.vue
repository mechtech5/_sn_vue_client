<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="col-12">
          <input
            type="text"
            placeholder="Enter Title"
            class="mt-5 form-control form-control-lg">
          <hr>
          <!-- <button class="btn btn-light"><i class="fas fa-image"></i></button> -->
          <button class="btn btn-light">
            Select Topic <i class="ml-2 fas fa-chevron-down"></i>
          </button>
          <hr>
        </div>
        
        <div class="col-9">        
          <textarea
            name=""
            id=""
            cols="30"
            rows="8"
            class="form-control mb-5 p-3"
            placeholder="Enter Body">
            </textarea>
            <div class="form-group">
              <button class="btn btn-primary mr-2">POST</button>
              <button class="btn btn-primary">SAVE DRAFT</button>
            </div>
        </div>
        
        <div class="col-3">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.title {
  line-height: 2em;
}
</style>