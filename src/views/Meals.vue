<template>
  <div class="meals">
    <a-card hoverable style="width: 240px">
      <img slot="cover" alt="example" :src="theRandomMeal.strMealThumb" />
      <a-card-meta :title="theRandomMeal.strMeal">
        <template slot="description">
          {{ theRandomMeal.strArea }}
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Meals",

  computed: {
    ...mapState("randomMeal", ["theRandomMeal"]),
  },
  methods: {
    ...mapActions("randomMeal", ["fetchRandomMeal"]),
  },
  async created() {
    await this.fetchRandomMeal();
  },
};
</script>

<style lang="scss">
</style>