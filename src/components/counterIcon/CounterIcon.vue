<template>
  <div class="counter-icon">
    <div>
      <a-badge :count="count">
        <a-icon class="counter-icon__img" type="heart" />
        <a href="#" class="head-example" />
      </a-badge>
      <!-- <a-button-group>
        <a-button @click="decline">
          <a-icon type="minus" />
        </a-button>
        <a-button @click="increase">
          <a-icon type="plus" />
        </a-button>
      </a-button-group> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 5,
      show: true,
    };
  },
  methods: {
    decline() {
      let count = this.count - 1;
      if (count < 0) {
        count = 0;
      }
      this.count = count;
    },
    increase() {
      this.count++;
    },
  },
};
</script>

<style lang="scss">
.counter-icon {
  &__img {
    svg {
      width: 45px;
      height: 100%;
    }
  }
}
</style>