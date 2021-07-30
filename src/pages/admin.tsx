import { defineComponent } from "vue";
import MyLayout from "../components/MyLayout";

export default defineComponent({
  setup() {
    return () => <MyLayout />;
  },
});
