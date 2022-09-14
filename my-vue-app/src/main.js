import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Router from "./router";

// import VueApexCharts from "vue3-apexcharts";

// import ApexCharts from "apexcharts";

const app = createApp(App);

// app.config.globalProperties.$apexcharts = ApexCharts;

console.log("router", Router.getRoutes());

app.use(Router).mount("#app");
