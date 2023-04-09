import ApiCall from "../../../../../utils/api_call";

export async function fetchCategories() {
    const result = await ApiCall({
        method: "GET",
        path:"/category"
    })

    if (!result.isSuccessful) {
        return console.log(result.message)
    }
    const categories = result.data
    return categories
    // console.log(result.data)
    
}
export async function fetchProducts() {
    const result = await ApiCall({
        method: "GET",
        path:"/products"
    })

    if (!result.isSuccessful) {
        return console.log(result.message)
    }
    const products = result.data
    return products
    
}