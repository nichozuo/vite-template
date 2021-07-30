import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    onMounted(() => {
      // store.dispatch("loading/addLoadingAction");
      // console.log("store");
    });
    return () => (
      <>
        <div>
          <a-button type="primary">
            <my-icon></my-icon>哈哈哈哈
          </a-button>
          <my-search-submit-button />
        </div>
      </>
    );
  },
});
