<template>
  <div class="blog">
    <div class="blog__videos">
      <iframe
        src="https://www.youtube.com/embed/sTdQY_gxZzg"
        frameborder="0"
        ng-show="showvideo"
      >
      </iframe>
      <iframe
        src="https://www.youtube.com/embed/PElfbOeb-R8"
        frameborder="0"
        ng-show="showvideo"
      >
      </iframe>
      <iframe
        src="https://www.youtube.com/embed/hLdZdVziw7o"
        frameborder="0"
        ng-show="showvideo"
      >
      </iframe>
      <iframe
        src="https://www.youtube.com/embed/BL2giVpixV0"
        frameborder="0"
        ng-show="showvideo"
      >
      </iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: "Blog",
};
</script>
<style lang="scss">
.blog {
  @include flex(center, flex-end, column, nowrap);
  height: 100%;
  background-image: url("~@/assets/img/Blog-img.png");
  background-repeat: no-repeat;
  &__videos {
    @include flex(center, center, $wrap: wrap);
    max-width: 70%;
  }
}
iframe {
  width: 40%;
  height: auto;
  padding: 20px;
}
</style>