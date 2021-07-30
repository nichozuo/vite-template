import { createApp } from "vue";
import App from "./App";

import "./assets/style/global.less";
import "virtual:windi.css";

import router from "./router/index";
import store from "./store";
const app = createApp(App).use(router).use(store);

import { setupAntdv } from "./setup/setupAntdv";
setupAntdv(app);
import { setupComponents } from "./setup/setupComponents";
setupComponents(app);

app.mount("#app");
