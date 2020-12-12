<template>
  <div class="country">
    <a-card hoverable style="width: 240px">
      <img slot="cover" alt="example" :src="randomMeal.strMealThumb" />
      <a-card-meta :title="randomMeal.strMeal">
        <template slot="description">
          {{ randomMeal.strInstructions }}
        </template>
      </a-card-meta>
    </a-card>

    <div class="area__list">
      <div class="area__list-item" v-for="area in areaList" :key="area.strArea">
        <h3>{{ area.strArea }}</h3>
        <a-card hoverable style="width: 40px" @click= "selectCountry">
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
  methods:{
selectCountry(){
  },
  },
  data() {
    return {
      selectedCoutry: "",
      randomMeal: {},
      areaList: {},
      areaMeals: "",
    };
  },
  async created() {
    const { meals } = await httpService.getRandomMeal(this.$route.params.id);
    this.randomMeal = meals[0];
    const areas = await httpService.getAreaList();
    this.areaList = areas.meals;
    const areaMealsList = await httpService.getAreaMeals("American");
    this.areaMeals = areaMealsList.meals;
    console.log(this.areaMeals);
    // const areaMealList = await httpService.getAreaList;
  },
  // async mounted() {
  //   const areas = await httpService.getAreaList();
  //   this.areaList = areas.meals;
  //   // const result = { ...this.areaList.map((a) => a.strArea) };
  //   // console.log(result);
  //   // this.areaList = result;
  // },
};
</script>

<style lang="scss">
.country {
  @include flex(center, center);
  padding: 50px;
}
</style>