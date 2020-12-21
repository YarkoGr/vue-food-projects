<template>
  <div class="country">
    <ul class="country__list">
      <li
        hoverable
        class="country__list-item"
        v-for="area in areasList"
        :key="area.strArea"
      >
        <a
          class="country__list-item-link"
          @click="
            $router.push({
              name: 'CountryMealsList',
              params: { country: area.strArea },
            })
          "
        >
          <span
            v-if="area.strArea === 'Unknown'"
            class="country__list-item-title"
            >Slovakia</span
          >
          <span v-else class="country__list-item-title">{{
            area.strArea
          }}</span>
          <img
            slot="cover"
            alt="example"
            :src="require(`@/assets/flags/${area.strArea}.png`)"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { httpService } from "../http/httpService";
export default {
  name: "Country",
  // methods: {
  //   const {findUnknow} = () => {
  //     if (this.areasList === "Unknow"){

  //     }
  //   },
  // },
  data() {
    return {
      areasList: "",
    };
  },

  async created() {
    const areas = await httpService.getAreaList();
    this.areasList = areas.meals;
    console.log(this.areasList);
  },
};
</script>

<style lang="scss">
.country {
  @include flex(center, center);
  height: 100%;
  &__list {
    @include flex(center, center, $wrap: wrap);
  }
  &__list-item {
    margin-right: 50px;
  }
  &__list-item-link {
    @include flex(center, center, column);
    padding: 5px;
    &:hover {
      background-color: $main-color;
      border-radius: 10px;
    }
    &:hover > span {
      color: $black;
    }
  }
  &__list-item-title {
    color: $main-color;
  }
}
</style>