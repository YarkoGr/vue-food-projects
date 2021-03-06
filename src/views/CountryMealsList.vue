<template>
  <div class="country-meals-list">
    <span class="country-meals-list__title">{{ $route.params.country }}</span>
    <ul>
      <XyzTransitionGroup
        class="country-meals-list__list container"
        appear
        xyz="duration-1 appear-front-1 small-1 appear-small-0 stagger-2 out-stagger-0"
      >
        <li
          class="country-meals-list__list-item"
          v-for="meals in displayedMeals"
          :key="meals.idMeal"
          @click="
            $router.push({
              name: 'MealRecipe',
              params: { id: meals.idMeal },
            })
          "
        >
          <a-card hoverable style="max-width: 240px">
            <img slot="cover" alt="example" :src="meals.strMealThumb" />
          </a-card>
          <span class="country-meals-list__list-item-title">{{
            meals.strMeal
          }}</span>
        </li>
      </XyzTransitionGroup>
    </ul>
    <div class="pagination-btns">
      <button class="btn" v-if="page != 1" @click="page--">Prev</button>
      <button
        type="button"
        class="btn numbers"
        v-for="pageNumber in pages"
        :key="pageNumber"
        @click="page = pageNumber"
      >
        {{ pageNumber }}
      </button>
      <button
        type="button"
        @click="page++"
        v-if="page < pages.length"
        class="btn"
      >
        next
      </button>
    </div>
  </div>
</template>

<script>
import "@animxyz/core";
import { httpService } from "../http/httpService";
export default {
  name: "CountryMealsList",
  data() {
    return {
      areaMeals: [],
      page: 1,
      perPage: 8,
      pages: [],
    };
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.areaMeals.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(e) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return e.slice(from, to);
    },
  },
  watch: {
    areaMeals() {
      this.setPages();
    },
  },
  computed: {
    displayedMeals() {
      let forCount = this.areaMeals;
      return this.paginate(forCount);
    },
  },
  async created() {
    const areaMealsList = await httpService.getAreaMeals(
      this.$route.params.country
    );
    this.areaMeals = areaMealsList.meals;
  },
};
</script>

<style lang="scss">
.country-meals-list {
  @import "../styles/btnGroupPagination.scss";
  @include flex(center, center, column);
  background: linear-gradient($gradient-light, $gradient),
    url("~@/assets/img/fork-bg.png") left top no-repeat;
  padding-top: 50px;
  padding-bottom: 50px;
  &__title {
    @include text($h32, 700, $text-color);
    margin-bottom: 30px;
  }
  &__list {
    width: 100%;
    @include flex(start, start, $wrap: wrap);
    --xyz-duration: 0.6s;
    --xyz-scale-x: 1.25;
    --xyz-scale-y: 0;
  }
  &__list-item {
    @include flex(center, center, column);
    width: calc((100% / 24) * 6);
    padding: 0 15px 15px 15px;
    cursor: pointer;
    @media screen and (max-width: 600px) {
      width: calc((100% / 24) * 8);
    }
    &:hover .country-meals-list__list-item-title {
      border: 1px solid $main-color;
    }
  }
  .ant-card {
    margin-bottom: 20px;
  }
  .ant-card-bordered {
    border: 3px solid $main-color;
  }
  &__list-item-title {
    @include text($h28, 400, $text-color);
    max-width: 240px;
    text-align: center;
    border: 1px solid transparent;
    transition: border-color 0.5s ease;
    @media screen and (max-width: 820px) {
      font-size: $h20;
    }
  }
  .pagination-btns {
    .numbers {
      @media screen and (max-width: 820px) {
        display: none;
      }
    }
  }
}
</style>