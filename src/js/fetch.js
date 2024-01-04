import axios from "axios";
import { addLoader, removeLoader } from "./loader";
// axios.defaults.baseURL = "https://food-boutique.b.goit.study/api/"; приклад використання, але другий більш універсальний
const axiosGet = axios.create({
    baseURL: "https://food-boutique.b.goit.study/api/",
})
async function fetchProducts(url) {
    try {
        // addLoader();
        const { data } = await axiosGet(url);
        return data
        
    } catch (error) {
        console.log(error);
    } finally { 
        // removeLoader();
    }
 }
function getAllProducts() {
    const url = "/products";
    return fetchProducts(url);
    
}
// getAllProducts().then(console.log)

// return fetchProducts(url/popular);

function getPopularProducts() {
    const url = "/products/popular";

    return fetchProducts(url);
    
    
}
getPopularProducts().then(console.log)

function getDiscountProducts() {
    const url = "/products/discount";

    return fetchProducts(url);
    
    
}
getDiscountProducts().then(console.log)

// async function getCategories() {
//     const url = "/products/categories";
//     const data = await fetchProducts(url);
//     const categories = data.map((category) => {
//         const categoryArr = category.split('_');
//         const newCategory = categoryArr.join(' ');
//         return newCategory;
//     });
//     return categories;
// } повний запис, а я використовую короткий ->

async function getCategories() {
    const url = "/products/categories";
    const data = await fetchProducts(url);
    return data.map((category) => category.split('_').join(' '))
};
    
getCategories().then(console.log)


function getProduct(id) {
    const url = `/products/${id}`;
    return fetchProducts(url);
}
// getProduct("640c2dd963a319ea671e3860").then(console.log)