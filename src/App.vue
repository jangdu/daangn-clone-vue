<template>
<div class="daangn-container">
  <div class="danngn-nav">
    <DaangnNav/>
  </div>
  <div style="margin: 30px;"></div>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <!-- <div class="bottom-nav-block">
    <nav>
      <router-link to="/" class="bottom-nav-element">홈</router-link>
      <router-link to="/" class="bottom-nav-element">홈</router-link>
      <router-link to="/" class="bottom-nav-element">홈</router-link>
      <router-link to="/" class="bottom-nav-element">홈</router-link>
      <router-link to="/" class="bottom-nav-element">홈</router-link>
    </nav>
  </div> -->
</div>
</template>

<script setup>
import DaangnNav from './components/nav/DaangnNav.vue'
</script>

<style lang="scss">

.daangn-container {
  width: 100%;
  margin: 0 auto;
  border: 1px solid rgba($color: #000000, $alpha: 0.1);
  display: inherit;
  display: block;
  position: relative;
  align-items: center;
  border: none;
}

.danngn-nav {
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  border: none;
  background-color: white;
}

.bottom-nav-block {
  width: 100%;
  margin-bottom: 1rem;
  display: flex;

}
.bottom-nav-element{

}
</style>
