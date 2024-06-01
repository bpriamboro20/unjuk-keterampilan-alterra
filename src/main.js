import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// import "bootstrap/dist/css/bootstrap.css";
// import bootstrap from "./node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap JavaScript (if needed)
// import "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use("bootstrap").mount("#app");
