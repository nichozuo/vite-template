import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <a-menu
        mode="inline"
        theme="dark"
        // :inline-collapsed="collapsed"
        // v-model:openKeys="openKeys"
        // v-model:selectedKeys="selectedKeys"
      >
        <a-menu-item
          key="1"
          v-slots={{
            icon: () => <my-icon style="" type="home" />,
          }}
        >
          <span>首页</span>
        </a-menu-item>
        <a-menu-item
          key="2"
          v-slots={{
            icon: () => <my-icon type="user" />,
          }}
        >
          <span>客户</span>
        </a-menu-item>
      </a-menu>
    );
  },
});
