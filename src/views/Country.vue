<template>
  <div class="country">
    <div class="country__list">
      <div
        class="area__list-item"
        v-for="area in areasList"
        :key="area.strArea"
      >
        <span class="area__list-item-title">{{ area.strArea }}</span>
        <a-card
          hoverable
          style="width: 40px"
          @click="
            $router.push({
              name: 'CountryMealsList',
              params: { country: area.strArea },
            })
          "
        >
          <img slot="cover" alt="example" src="../assets/flags/American.png" />
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
import { httpService } from "../http/httpService";
export default {
  name: "Country",
  methods: {
    selectCountry() {},
  },
  data() {
    return {
      areasList: {},
      areaMeals: "",
    };
  },
  async created() {
    const areas = await httpService.getAreaList();
    this.areasList = areas.meals;
  },
};
</script>

<style lang="scss">
.country {
  &__list {
    @include flex(center, center, $wrap: wrap);
    color: $main-color;
  }
  &__list-item {
    padding: 50px;
  }
}
</style>