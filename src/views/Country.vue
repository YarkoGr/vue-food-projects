<template>
  <div class="country">
    <div class="country__list">
      <div
        class="area__list-item"
        v-for="area in areasList"
        :key="area.strArea"
      >
        <h3>{{ area.strArea }}</h3>
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
          <img
            slot="cover"
            alt="example"
            src="https://www.themealdb.com/images/ingredients/Lime.png"
          />
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
  @include flex(center, center);
  padding: 50px;
  color: $main-color;
}
</style>