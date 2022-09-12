<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { watchEffect, watch, ref, onMounted } from '@vue/runtime-core';
import '@vuepic/vue-datepicker/dist/main.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';

const updateSelected = (selected) => {
  console.log('selected', selected);
};

// watchEffect(() =>
//   console.log('nav-topbar-ce', document.querySelector('nav-topbar-ce'))
// );

// setTimeout(() => {
//
// }, 1000);
const navbar = ref(null);
onMounted(() => {
  navbar.value.addEventListener('update:route', updateSelected);
});
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-1">
        <sidebar-ce />
      </div>
      <div class="col-11">
        <div class="row">
          <nav-topbar-ce ref="navbar" @update:route="updateSelected" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
