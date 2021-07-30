import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import MyLoading from "./components/MyLoading";

export default defineComponent({
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("auth/meAction"));
    return () => (
      <>
        <MyLoading />
        <router-view />
      </>
    );
  },
});
