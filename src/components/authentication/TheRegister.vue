<template>
  <div class="the-register">
    <a-form-model
      layout="vertical"
      :model="formInline"
      @submit="handleSubmit"
      @submit.native.prevent
    >
      <a-form-model-item>
        <a-input type="email" v-model="formInline.email" placeholder="EMail">
          <a-icon
            slot="prefix"
            type="email"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-input
          v-model="formInline.password"
          type="password"
          placeholder="Password"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-input
          v-model="formInline.passwordRepeat"
          type="password"
          placeholder="Repeat your password"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="
            formInline.email === '' ||
            formInline.password === '' ||
            formInline.passwordRepeat === ''
          "
        >
          Register
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "TheRegister",

  data() {
    return {
      formInline: {
        email: "",
        password: "",
        passwordRepeat: "",
      },
    };
  },
  methods: {
    ...mapActions(["signUpAction"]),
    handleSubmit() {
      if (this.formInline.password != this.formInline.passwordRepeat) {
        alert("invaild repeat password");
      } else {
        this.signUpAction({
          email: this.formInline.email,
          password: this.formInline.password,
        });
        alert("Success", "Now you can login in system");
      }
    },
  },
  // computed: {
  //   ...mapActions([["isUserAuth"]]),
  // },
};
</script>
<style lang="scss">
.the-register {
  height: 100%;
  @include flex(center, center);
  .ant-form {
    width: 80%;
  }
  .ant-btn:not(:last-child) {
    margin-right: 25px;
  }
}
</style>