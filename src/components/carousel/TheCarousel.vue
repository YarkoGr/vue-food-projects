<template>
  <div class="the-carousel">
    <a-carousel arrows>
      <div
        slot="prevArrow"
        slot-scope=""
        class="custom-slick-arrow"
        style="left: 10px; zindex: 1"
      >
        <a-icon type="left-circle" />
      </div>
      <div
        slot="nextArrow"
        slot-scope=""
        class="custom-slick-arrow"
        style="right: 10px"
      >
        <a-icon type="right-circle" />
      </div>
      <div>
        <!-- <a-card hoverable style="width: 240px">
          <img slot="cover" alt="example" src="" />
          <a-card-meta title="">
            <template slot="description">
              {{ randomMeal.strArea }}
            </template>
          </a-card-meta>
        </a-card> -->
      </div>
    </a-carousel>
  </div>
</template>
<script>
import { httpService } from "../../http/httpService";
export default {
  name: "TheCarosel",
  data() {
    return {
      latestList: {},
    };
  },
  async created() {
    const latestMeals = await httpService.getLatestMeals();
    this.latestList = latestMeals;
  },
};
</script>
<style lang="scss">
</style>