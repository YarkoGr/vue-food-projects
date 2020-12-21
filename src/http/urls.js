const BASE_MEAL_URL = "https://www.themealdb.com/api/json/v1";
const api_key = "1";

const mealUrls = {
    random: `${BASE_MEAL_URL}/${api_key}/random.php`,
    areaList: `${BASE_MEAL_URL}/${api_key}/list.php?a=list`,
    areaMeals: `${BASE_MEAL_URL}/${api_key}/filter.php?a=`,
    lookupId: `${BASE_MEAL_URL}/${api_key}/lookup.php?i=`,
    allCategories: `${BASE_MEAL_URL}/${api_key}/categories.php`,
    categoriesMeals: `${BASE_MEAL_URL}/${api_key}/filter.php?c=`,
    ingredientsList: `${BASE_MEAL_URL}/${api_key}/list.php?i=list`,
    searchName: `${BASE_MEAL_URL}/${api_key}/search.php?s=`,
};

export { mealUrls };