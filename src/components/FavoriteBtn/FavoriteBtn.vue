<template>
  <div class="favorite-btn">
    <a-button @click="handleClick(fullRecipe)" shape="circle" icon="heart" />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "FavoriteBtn",
  data() {
    return {
      fullRecipe: [],
    };
  },

  methods: {
    ...mapActions("addToFavorite", ["addMealToFavorite"]),
    ...mapActions("mealRecipe", ["fetchMaleRecipe"]),
    handleClick(favorits) {
      this.addMealToFavorite(favorits);
    },
  },
  computed: {
    ...mapState("mealRecipe", ["mealFullRecipe"]),
  },
  async created() {
    await this.fetchMaleRecipe(this.$route.params.id);
    await this.mealFullRecipe;
    this.fullRecipe = this.mealFullRecipe[0];
  },
};
</script>