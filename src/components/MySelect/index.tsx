import { defineComponent } from "vue";
import { useVModel } from "@vueuse/core";

export const MySelect = defineComponent({
  props: {
    items: Array,
    value: [Number, String],
    placeholder: {
      type: String,
      default: "请选择",
    },
    width: {
      type: String,
      default: "200px",
    },
  },
  setup(props, { emit }) {
    const selected = useVModel(props, "value", emit);
    return () => (
      <a-select
        style={{ width: props.width }}
        v-model={[selected.value, "value"]}
        allowClear
        placeholder={props.placeholder}
      >
        {props.items?.map((item: any) => {
          return (
            <a-select-option value={item.value}>{item.name}</a-select-option>
          );
        })}
      </a-select>
    );
  },
});

export const MyMultipleSelect = defineComponent({
  props: {
    items: Array,
    value: Array || undefined,
    placeholder: {
      type: String,
      default: "请选择",
    },
    width: {
      type: String,
      default: "200px",
    },
  },
  setup(props, { emit }) {
    const selected = useVModel(props, "value", emit);
    return () => (
      <a-select
        style={{ width: props.width }}
        mode="multiple"
        v-model={[selected.value, "value"]}
        allowClear
        placeholder={props.placeholder}
      >
        {props.items?.map((res: any) => {
          return (
            <a-select-option value={res.value}>{res.name}</a-select-option>
          );
        })}
      </a-select>
    );
  },
});
