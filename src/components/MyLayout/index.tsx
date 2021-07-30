import { defineComponent, ref } from "vue";
import SiderMenu from "./components/SiderMenu";
import TopLogo from "./components/TopLogo";
import SubMenu from "./components/SubMenu";

export default defineComponent({
  setup() {
    const selectedKeys1 = ref();
    return () => (
      <a-layout class="my-layout">
        <a-layout-sider class="my-layout-sider" width="120">
          <TopLogo />
          <SiderMenu v-model={[selectedKeys1.value, "selectedKeys"]} />
        </a-layout-sider>
        <a-layout>
          <a-layout-header class="my-layout-header">
            <h1>鑫玺云珠宝管理系统</h1>
          </a-layout-header>
          <a-layout-content style={{ paddingTop: "20px" }}>
            <a-layout>
              <a-layout-sider width="150" class="my-layout-sub-sider">
                <SubMenu />
              </a-layout-sider>
              <a-layout-content style={{ padding: "0 20px" }}>
                <a-card style="min-height: 100%">
                  <router-view />
                </a-card>
              </a-layout-content>
            </a-layout>
          </a-layout-content>
        </a-layout>
      </a-layout>
    );
  },
});
