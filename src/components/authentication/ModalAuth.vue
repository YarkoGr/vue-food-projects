<template>
  <div class="modal-auth">
    <a-button type="primary" @click="showModal"> Login/Register </a-button>
    <a-modal with="600" v-model="visible" title="Food Project" @ok="handleOk">
      <the-login />
      <the-register />
    </a-modal>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import TheLogin from "./TheLogin.vue";
import TheRegister from "./TheRegister.vue";
export default {
  components: { TheLogin, TheRegister },
  name: "AuthButtons",
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    ...mapGetters(["isUserAuth"]),
  },
  methods: {
    ...mapActions(["signOutAction"]),
    signOut() {
      this.signOutAction();
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>
<style lang="scss">
.modal-auth {
  .ant-btn-primary {
    background-color: $main-color;
    border: none;
    &:hover {
      background-color: $gradient-extra-light;
      color: $main-color;
    }
  }
}
</style>