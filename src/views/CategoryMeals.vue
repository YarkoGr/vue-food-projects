<template>
  <div class="category-meals">
    <span class="category-meals__title">{{ $route.params.category }}</span>
    <ul>
      <XyzTransitionGroup
        xyz="fade skew-left"
        class="category-meals__list container"
        appear
      >
        <li
          class="category-meals__list-item"
          v-for="meal in displayedMeals"
          :key="meal.idMeal"
          @click="
            $router.push({
              name: 'MealRecipe',
              params: { id: meal.idMeal },
            })
          "
        >
          <a-card class="category-meals__list-item-img">
            <img slot="cover" alt="food-img" :src="meal.strMealThumb" />
          </a-card>
          <span class="category-meals__list-item-title">{{
            meal.strMeal
          }}</span>
        </li>
      </XyzTransitionGroup>
    </ul>
    <div class="pagination-btns">
      <button class="btn" v-if="page != 1" @click="page--">Prev</button>
      <button
        type="button"
        class="btn active numbers"
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
import { httpService } from "../http/httpService";
import "@animxyz/core";
export default {
  name: "CategoryMeals",
  data() {
    return {
      categoryMealsList: [],
      page: 1,
      perPage: 8,
      pages: [],
    };
  },

  methods: {
    setPages() {
      let numberOfPages = Math.ceil(
        this.categoryMealsList.length / this.perPage
      );
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
    categoryMealsList() {
      this.setPages();
    },
  },
  computed: {
    displayedMeals() {
      let forCount = this.categoryMealsList;
      return this.paginate(forCount);
    },
  },
  async created() {
    const categoryMeals = await httpService.getCategoryMeals(
      this.$route.params.category
    );
    this.categoryMealsList = categoryMeals.meals;
  },
};
</script>
<style lang="scss">
.category-meals {
  background: linear-gradient($gradient-extra-light, $gradient-extra-light),
    url("~@/assets/img/three-meals.png") center center no-repeat;
  @import "../styles/btnGroupPagination.scss";
  @include flex(center, center, column);
  padding-top: 50px;
  padding-bottom: 50px;
  &__title {
    @include text($h60, 700, $text-color);
    font-family: $font-cookie;
    margin-bottom: 30px;
  }
  &__list {
    width: 100%;
    @include flex(stretch, start, $wrap: wrap);
    overflow: hidden;
  }
  &__list-item {
    @include flex(center, center, column);
    width: calc((100% / 24) * 6);
    padding: 0 15px 15px 15px;
    cursor: pointer;
    @media screen and (max-width: 600px) {
      width: calc((100% / 24) * 8);
    }

    &:hover .category-meals__list-item-title {
      color: $bg-footer;
    }
    &:hover .ant-card-bordered {
      border: 3px solid $gradient;
    }
  }
  .ant-card {
    margin-bottom: 30px;
  }
  .ant-card-bordered {
    border: 3px solid $text-color;
  }
  &__list-item-title {
    transition: color 0.5s ease;
    @include text($h28, 400, $main-color);
    max-width: 240px;
    text-align: center;
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