import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css"; // Importação dos ícones do MDI

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: "mdi", // Indica o uso dos ícones MDI
  },
});

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount("#app");
