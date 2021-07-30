import { defineComponent } from "vue";
import MyIcon from "../../MyIcon";

export default defineComponent({
  setup() {
    return () => (
      <div class="top-logo">
        <div>
          <MyIcon type="application-one" fill="#FFF" size="36" />
        </div>
      </div>
    );
  },
});
