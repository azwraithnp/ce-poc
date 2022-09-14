<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, onMounted } from "@vue/runtime-core";
import "@vuepic/vue-datepicker/dist/main.css";
import "vue-multiselect/dist/vue-multiselect.min.css";

// const updateSelected = (selected) => {
//   console.log("selected", selected);
// };

// const navbar = ref(null);
// onMounted(() => {
//   navbar.value.addEventListener("update:route", updateSelected);
// });
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <div class="container-fluid">
    <div class="row no-p">
      <div class="col-side sidebar">
        <bl-ce-sidebar />
      </div>

      <div class="col-container">
        <bl-ce-nav-topbar ref="navbar" @update:route="updateSelected" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
.col-side {
  width: 56px;
}

.sidebar {
  min-height: calc(100vh);
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  z-index: 9;
}

.no-p {
  padding: 0;
  margin: 0;
}

.container-fluid {
  padding: 0;
}

.col-container {
  width: calc(100% - 56px);
}
</style>
