const BASE_MEAL_URL = "https://www.themealdb.com/api/json/v1";
const api_key = "1";

const mealUrls = {
    random: `${BASE_MEAL_URL}/${api_key}/random.php`,
    searchName: `${BASE_MEAL_URL}/${api_key}/search.php?s=`,
    categoriesList: `${BASE_MEAL_URL}/${api_key}/list.php?c=list`,
    areaList: `${BASE_MEAL_URL}/${api_key}/list.php?a=list`,
    ingredientsList: `${BASE_MEAL_URL}/${api_key}/list.php?i=list`,
    areaMeals: `${BASE_MEAL_URL}/${api_key}/filter.php?a=`,
    allCategories: `${BASE_MEAL_URL}/${api_key}/categories.php`,
    lookup: `${BASE_MEAL_URL}/${api_key}/lookup.php?i=`,
};

export { mealUrls };