<template>
  <div class="blog">
    <iframe
      width="420"
      height="315"
      src="https://www.youtube.com/embed/sTdQY_gxZzg"
      frameborder="0"
      ng-show="showvideo"
    >
    </iframe>
  </div>
</template>
<script>
export default {
  name: "Blog",
};
</script>
<style lang="scss">
.blog {
  @include flex(center, center, column, nowrap);
  height: 100%;
  background-image: url("~@/assets/img/home-bgrd.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>