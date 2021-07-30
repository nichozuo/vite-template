import { defineComponent } from "vue";
import { IconPark } from "@icon-park/vue-next/es/all";

export interface MyIconPropsType {
  icon: string;
  class?: string;
  theme?: string;
  size?: number | string;
  color: string;
}

export default defineComponent({
  components: { IconPark },
  props: {
    theme: {
      type: String,
      default: "outline",
    },
    size: {
      type: [Number, String],
      default: "1em",
    },
    spin: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: String,
      default: "currentColor",
    },
    class: String,
    type: {
      type: String,
      default: "home",
    },
  },
  setup(props) {
    return () => (
      <span class={"anticon " + props.class}>
        <icon-park
          type={props.type}
          theme={props.theme}
          size={props.size}
          spin={props.spin}
          fill={props.fill}
          class={props.class}
        />
      </span>
    );
  },
});
