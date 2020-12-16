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

    getMealById = (id) => this._fetchData(`${mealUrls.lookup}${id}`);
}

export const httpService = new HttpService();