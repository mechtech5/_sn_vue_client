<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-8">
        <div>
          <span>Create a post</span>
          <span class="float-right">DRAFTS 0</span>
        </div>
        <hr>
        <div class="mb-2">
          <select name="" id="" class="col-4 form-control">
            <option value="">-- --</option>
          </select>
        </div>
        <div class="card">
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <a class="nav-link active" href="#">Post</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Image & Video</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
          <div class="card-body">
            <input type="text" class="form-control mb-2" placeholder="Title">
            <textarea name="" id="" cols="30" rows="5" class="form-control mb-2" placeholder="Text(optional)"></textarea>

            <div>
              <span></span>
              <span class="float-right">
                <button class="btn btn-outline-primary btn-sm">Save Draft</button>
                <button class="btn btn-info btn-sm ml-2">Post</button>
              </span>
            </div>
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