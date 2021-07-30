import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const count = computed(() => {
      return store.state.loading.count;
    });

    const show = ref(false);

    return () => (
      <div
        class="fixed w-full h-full flex justify-center items-center z-60"
        v-show={count.value > 0}
      >
        <a-spin size="large" />
      </div>
    );
  },
});
