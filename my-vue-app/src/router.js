import { createRouter, createWebHistory } from "vue-router";
import ModuleSummary from "./components/ModuleSummary.vue";

const history = createWebHistory();

const routes = [{ path: "/", name: "home", component: ModuleSummary }];

const router = createRouter({ history, routes });

export default router;
