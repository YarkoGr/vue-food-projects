<template>
  <div class="auth-buttons">
    <router-link to=""></router-link>
  </div>
</template>
<script>
export default {
  name: "AuthButtons",
  data() {
    return {
      buttons: [
        {
          name: "Login",
          path: "#",
        },
        {
          name: "Regiter",
          path: "#",
        },
      ],
    };
  },
};
</script>