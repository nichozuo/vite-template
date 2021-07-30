import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <a-menu class="my-sub-menu">
        <a-menu-item-group
          key="g1"
          v-slots={{
            title: () => <span>客户管理</span>,
          }}
        >
          <a-menu-item key="1">
            <my-icon></my-icon> 客户查询
          </a-menu-item>
          <a-menu-item key="2">
            <my-icon></my-icon> 客户设置
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group
          key="g2"
          v-slots={{
            title: () => <span>客户管理</span>,
          }}
        >
          <a-menu-item key="11">
            <my-icon></my-icon> 客户设置
          </a-menu-item>
          <a-menu-item key="12">
            <my-icon></my-icon> 客户设置
          </a-menu-item>
        </a-menu-item-group>
      </a-menu>
    );
  },
});
