<template>
  <div class="the-login">
    <div class="the-login__form-wrapper">
      <span v-if="isUserAuth" class="the-login__welcome"
        >Welcome: {{ getUser.email }}</span
      >
      <a-form-model
        layout="inline"
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
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formInline.email === '' || formInline.password === ''"
          >
            Log in
          </a-button>
          <a-button v-if="isUserAuth" @click="signOut">Log Out</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TheLogin",
  data() {
    return {
      formInline: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["signInAction", "signOutAction"]),
    signOut() {
      this.signOutAction();
    },
    handleSubmit() {
      this.signInAction({
        email: this.formInline.email,
        password: this.formInline.password,
      });
    },
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
  },
};
</script>
<style lang="scss">
.the-login {
  height: 100%;
  @include flex(center, center);
  &__form-wrapper {
    @include flex(start, start, column);
  }
  &__welcome {
    margin-bottom: 25px;
    @include text($h28, 400, $text-color);
  }
}
</style>