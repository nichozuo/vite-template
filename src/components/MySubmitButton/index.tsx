import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const count = computed(() => {
      return store.state.loading.count;
    });

    return () => (
      <a-button
        type="primary"
        class="w-full"
        size="large"
        htmlType="submit"
        loading={count.value > 0}
      >
        登录
      </a-button>
    );
  },
});
