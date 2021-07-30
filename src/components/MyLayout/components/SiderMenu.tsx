import { useVModel } from "@vueuse/core";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    selectedKeys: [Array],
  },
  setup(props, { emit }) {
    const store = useStore();

    const menus = computed(() => {
      return store.state.auth.permissions;
    });

    const selectedKeys = ref([]);

    const onSelect = () => {
      console.log(selectedKeys.value);
    };

    return () => (
      <a-menu
        mode="inline"
        theme="dark"
        v-model={[selectedKeys.value, "selectedKeys"]}
        onSelect={onSelect}
      >
        {menus.value.children?.map((item: any) => (
          <a-menu-item
            key={item.id}
            v-slots={{
              icon: () => <my-icon type={item.icon} />,
            }}
          >
            <span>
              {item.id}_{item.name}
            </span>
          </a-menu-item>
        ))}
      </a-menu>
    );
  },
});
