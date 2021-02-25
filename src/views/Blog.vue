<template>
  <div class="blog container">
    <div class="blog__videos item-group" xyz="fade stagger">
      <div class="square xyz-in" xyz="inherit left">
        <iframe
          allowfullscreen
          src="https://www.youtube.com/embed/sTdQY_gxZzg"
          frameborder="0"
        >
        </iframe>
      </div>
      <div class="square xyz-in" xyz="inherit up">
        <iframe
          allowfullscreen
          src="https://www.youtube.com/embed/PElfbOeb-R8"
          frameborder="0"
        >
        </iframe>
      </div>
      <div class="square xyz-in" xyz="inherit down">
        <iframe
          allowfullscreen
          src="https://www.youtube.com/embed/hLdZdVziw7o"
          frameborder="0"
        >
        </iframe>
      </div>
      <div class="square xyz-in" xyz="inherit right">
        <iframe
          allowfullscreen
          src="https://www.youtube.com/embed/BL2giVpixV0"
          frameborder="0"
        >
        </iframe>
      </div>
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
  --xyz-translate-default: 300%;
  --xyz-ease-default: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --xyz-stagger-default: 0.1s;
  @include flex(center, flex-end, column, wrap);
  height: 100%;
  background-image: url("~@/assets/img/Blog-img.png");
  background-repeat: no-repeat;
  &__videos {
    @include flex(start, center, $wrap: wrap);
    max-width: 70%;
  }
}
iframe {
  max-width: 240px;
  height: auto;
  padding: 20px;
}
</style>