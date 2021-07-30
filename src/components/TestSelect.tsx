import { defineComponent, onMounted, ref } from "vue";
import { useVModel } from "@vueuse/core";
import { MySelect } from "../components/MySelect/index";

export default defineComponent({
  props: {
    value: [Array, Number],
    placeholder: {
      type: String,
      default: "请选择",
    },
    width: {
      type: Number,
      default: 200,
    },
  },
  setup(props, { emit }) {
    const selected = useVModel(props, "value", emit);
    const items = ref<any[]>([]);

    onMounted(() => {
      items.value = [
        {
          name: "name1",
          value: 1,
        },
        {
          name: "name2",
          value: 2,
        },
      ];
    });

    return () => (
      <MySelect
        items={items.value}
        placeholder={props.placeholder}
        v-model={[selected.value, "value"]}
      />
    );
  },
});
