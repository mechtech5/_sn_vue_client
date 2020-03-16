<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Nav';

export default {
  components: {
    Navbar
  }
}
</script>

<style>
  body {
    background-color: #DAE0E6 !important;
  }
</style>
