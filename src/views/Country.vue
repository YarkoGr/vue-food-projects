<template>
  <div class="country">
    <ul>
      <XyzTransitionGroup
        appear
        class="country__list container"
        xyz="fade duration-1 appear-front-1 small-1 appear-small-0 stagger-2 out-stagger-0"
      >
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
      </XyzTransitionGroup>
    </ul>
  </div>
</template>

<script>
import "@animxyz/core";
import { httpService } from "../http/httpService";
export default {
  name: "Country",

  data() {
    return {
      areasList: "",
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
  background: linear-gradient($gradient, $gradient),
    url("~@/assets/img/meat-bg.png") bottom center no-repeat;
  background-size: contain;
  overflow: hidden;
  @include flex(center, center);
  height: 100%;
  &__list {
    @include flex(start, start, $wrap: wrap);
  }
  &__list-item {
    padding: 15px;
    width: calc(100% / 24 * 4);
    --xyz-rotate-z: 1turn;
    --xyz-origin: center -200%;
    --xyz-duration: 1s;
    --xyz-scale-x: 0;
    --xyz-scale-y: 0;
    @media screen and (max-width: 600px) {
      width: calc(100% / 24 * 6);
    }
    @media screen and (max-width: 400px) {
      width: calc(100% / 24 * 8);
    }
  }
  &__list-item-link {
    @include flex(center, center, column);
    padding: 5px;
    border-radius: 10px;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: $main-color;
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