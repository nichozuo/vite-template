import { defineComponent } from "vue";

export const MySearchSubmitButton = defineComponent({
  //搜索按钮
  props: {
    title: {
      type: String,
      default: "搜索",
    },
    icon: {
      type: String,
      default: "search",
    },
    color: {
      type: String,
      default: "#FFF",
    },
    type: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => (
      <a-form-item>
        <a-button
          type={props.type}
          disabled={props.disabled}
          html-type="submit"
          v-slots={{
            icon: () => (
              <my-icon
                style="position:relative;top:-2px;"
                icon={props.icon}
                color={props.color}
              />
            ),
          }}
        >
          {props.title}
        </a-button>
      </a-form-item>
    );
  },
});

export const MyBasisButton = defineComponent({
  //基本按钮
  props: {
    title: {
      type: String,
      default: "默认",
    },
    icon: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#FFF",
    },
    type: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: undefined,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    return () => (
      <a-button
        type={props.type}
        disabled={props.disabled}
        onClick={() => {
          emit("click");
        }}
        v-slots={{
          icon: () =>
            props.icon ? (
              <my-icon
                style="position:relative;top:-2px;"
                icon={props.icon}
                color={props.color}
              />
            ) : (
              ""
            ),
        }}
      >
        {props.title}
      </a-button>
    );
  },
});

export const MyDeleteButton = defineComponent({
  //带二次确认按钮
  props: {
    popTitle: {
      type: String,
      default: "确定要删除？",
    },
    title: {
      type: String,
      default: "删除",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      defualt: "delete",
    },
    color: {
      type: String,
      default: "#fff",
    },
    onConfirm: {
      type: undefined,
    },
  },
  emits: ["confirm"],
  setup(props, { emit }) {
    return () => (
      <a-popconfirm
        title={props.popTitle}
        disabled={props.disabled}
        ok-text="是"
        cancel-text="否"
        onConfirm={() => {
          emit("confirm");
        }}
      >
        <a-button
          danger
          disabled={props.disabled}
          v-slots={{
            icon: () =>
              props.icon ? (
                <my-icon
                  style="position:relative;top:-2px;"
                  icon={props.icon}
                  color={props.color}
                />
              ) : (
                ""
              ),
          }}
        >
          {props.title}
        </a-button>
      </a-popconfirm>
    );
  },
});
