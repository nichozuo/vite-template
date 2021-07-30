import { defineComponent, onMounted, ref } from "vue";
import { MySearchSubmitButton } from "../../components/MyButton";
import TestSelect from "../../components/TestSelect";

export default defineComponent({
  setup() {
    const value1 = ref(1);

    onMounted(() => {});
    return () => (
      <a-card>
        <a-form>
          <a-form-item
            label="Activity name"
            v-slots={{
              help: () => (
                <span>
                  hahahhahahahah <a>adsfasdf</a>
                </span>
              ),
            }}
          >
            <TestSelect v-model={[value1.value, "value"]}></TestSelect>
          </a-form-item>
        </a-form>
      </a-card>
      // <>
      //   <MySearchSubmitButton />
      //
      // </>
    );
  },
});
