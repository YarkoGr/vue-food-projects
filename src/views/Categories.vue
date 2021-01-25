<template>
  <div class="categories">
    <ul class="categories__list">
      <li
        class="categories__list-item"
        v-for="category in categorysList"
        :key="category.strCategory"
        @click="
          $router.push({
            name: 'CategoryMeals',
            params: { category: category.strCategory },
          })
        "
      >
        <a-card>
          <img slot="cover" alt="example" :src="category.strCategoryThumb" />
        </a-card>
        <span class="categories__list-item-title">{{
          category.strCategory
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { httpService } from "../http/httpService";
export default {
  name: "Categories",
  data() {
    return {
      categorysList: "",
    };
  },
  async created() {
    const findCategorys = await httpService.getAllCategorys();
    this.categorysList = findCategorys.categories;
  },
};
</script>

<style lang="scss">
.categories {
  padding-top: 20px;
  &__title {
    @include text($h60, 700, $main-color);
    font-family: $font-cookie;
  }
  &__list {
    @include flex(center, $wrap: wrap);
  }
  &__list-item {
    width: calc(100% / 24 * 6);
    text-align: center;
    @include flex(start, center, column);
    padding: 0 15px 15px 15px;
    &:hover > span {
      border: 1px solid $main-color;
    }
    &:hover {
      cursor: pointer;
    }
  }

  &__list-item-title {
    @include text($h32, 400, $main-color);
    font-family: $font-cookie;
    border: 1px solid transparent;
    width: 100%;
    height: 100%;
  }
}
</style>