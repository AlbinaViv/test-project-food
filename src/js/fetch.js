import axios from "axios";

 async function fetchProducts() {
    try { 
        const { data } = await axios.get("https://food-boutique.b.goit.study/api/products");
     return data
        
    } catch (error) {
        console.log(error);
    } 
 }
// fetchProducts().then((products) => {
//     return products;
// }).then((products) => (products)).then(console.log) є три варінти повернення даних з ф-ц. Нижче я обрала найзручніший варіант(.then)

fetchProducts().then((products) => {
    return products;
})