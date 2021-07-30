import { App } from "vue";
import {
  MySearchSubmitButton,
  MyBasisButton,
  MyDeleteButton,
} from "../components/MyButton";
// import MyPagination from "../components/MyPagination";
// import MyModal from "../components/MyModal";
// import MyLoading from "../components/MyLoading";
import MyIcon from "../components/MyIcon";

export const setupComponents = (app: App<Element>) => {
  app.component("MySearchSubmitButton", MySearchSubmitButton);
  app.component("MyBasisButton", MyBasisButton);
  app.component("MyDeleteButton", MyDeleteButton);
  // app.component("MyLoading", MyLoading);
  // app.component("MyPagination", MyPagination);
  // app.component("MyModal", MyModal);
  app.component("MyIcon", MyIcon);
};
