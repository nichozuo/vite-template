import { defineComponent } from 'vue';
import { useVModel } from '@vueuse/core';

export const MyCheckbox = defineComponent({
  props: {
    items: Array,
    value: Array || undefined,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const selected = useVModel(props, 'value', emit);
    return () => (
      <a-checkbox-group
        v-model={[selected.value, 'value']}
        disabled={props.disabled}
        options={props.items}
      />
    );
  },
});
