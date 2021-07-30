import { defineComponent, reactive, toRaw } from "vue";
import loginBg from "../assets/images/login-bg.png";
import { Form } from "ant-design-vue";
import _ from "lodash";
import MySubmitButton from "../components/MySubmitButton";
import { useStore } from "vuex";
const useForm = Form.useForm;

export default defineComponent({
  setup() {
    const store = useStore();

    const modelRef = reactive({
      username: undefined,
      password: undefined,
    });
    const rulesRef = reactive({
      username: [
        { required: true, message: "请输入用户名" },
        { min: 3, max: 12, message: "长度在3到15位", trigger: "blur" },
      ],
      password: [
        { required: true, message: "请输入密码" },
        { min: 3, max: 12, message: "长度在3到15位", trigger: "blur" },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      rulesRef
    );

    var onSubmit = () => {
      validate()
        .then(() => {
          store.dispatch("auth/loginAction", modelRef);
        })
        .catch((err) => {
          console.log("error", err);
        });
    };

    return () => (
      <div class="absolute inset-0 bg-gray-100 flex justify-center items-center">
        <div
          class="bg-white rounded-xl flex flex-row shadow-md"
          style="width:850px; height: 500px"
        >
          <div
            style="width:500px"
            class="flex justify-center items-center bg-blue-500 rounded-xl"
          >
            <img src={loginBg} style="width:80%" />
          </div>
          <div style="width:350px" class="flex flex-col items-center p-14">
            <div
              class="bg-blue-500 rounded-full flex flex-col justify-center items-center"
              style="width:60px; height:60px;"
            >
              <my-icon type="application-one" fill="#FFF" size="40" />
            </div>
            <h1 class="pt-2 pb-10 text-2xl ">后台管理系统</h1>
            <a-form class="w-full" model={modelRef} onSubmit={onSubmit}>
              <a-form-item {...validateInfos["username"]}>
                <a-input
                  v-slots={{
                    prefix: () => <my-icon type="user" class="text-gray-400" />,
                  }}
                  placeholder="请输入用户名"
                  size="large"
                  v-model={[modelRef.username, "value"]}
                />
              </a-form-item>
              <a-form-item {...validateInfos["password"]}>
                <a-input
                  v-slots={{
                    prefix: () => <my-icon type="lock" class="text-gray-400" />,
                  }}
                  placeholder="请输入密码"
                  size="large"
                  type="password"
                  v-model={[modelRef.password, "value"]}
                />
              </a-form-item>
              <a-form-item>
                <MySubmitButton />
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    );
  },
});
