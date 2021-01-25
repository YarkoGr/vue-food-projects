import { mealUrls } from "../http/index.js";

class HttpService {
    _fetchData = async(url, config = {}) => {
        try {
            const res = await fetch(url, config);
            const parsedRes = await res.json();
            return parsedRes;
        } catch (error) {
            console.error("error");
        }
    };
    getRandomMeal = () => this._fetchData(mealUrls.random);
    getAreaList = () => this._fetchData(mealUrls.areaList);
    getAreaMeals = (country) =>
        this._fetchData(`${mealUrls.areaMeals}${country}`);
    getMealById = (id) => this._fetchData(`${mealUrls.lookupId}${id}`);
    getAllCategorys = () => this._fetchData(mealUrls.allCategories);
    getCategoryMeals = (category) =>
        this._fetchData(`${mealUrls.categoriesMeals}${category}`);
    getLatestMeals = () => this._fetchData(mealUrls.latestMeals);

    // getCategories = async() => {
    //     const { meal: ingredientsList } = await this._fetchData(
    //         mealUrls.ingredientsList
    //     );
    //     const { meal: areaList } = await this._fetchData(mealUrls.areaList);
    //     const { meal: categoriesList } = await this._fetchData(
    //         mealUrls.categoriesList
    //     );
    //     return {
    //         ingredientsList,
    //         areaList,
    //         categoriesList,
    //     };
    // };
    getSearchMealByName = (query) =>
        this._fetchData(`${mealUrls.searchName}${query}`);
}

export const httpService = new HttpService();