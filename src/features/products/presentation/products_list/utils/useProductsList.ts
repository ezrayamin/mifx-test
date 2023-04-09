import { useEffect, useState } from "react";
import Category from "../../../models/category_model";
import Product from "../../../models/product_model";
import ApiCall from "../../../../../utils/api_call";

type ProductsListResult = {
    products: Product[];
    categories: Category[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
};

export default function useProductsList(): ProductsListResult {

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [categories, setCategories] = useState<Category[]>([])
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const categoriesData = await fetchCategories()
        const productsData = await fetchProducts()
        setCategories(categoriesData)
        setProducts(productsData)
        setIsLoading(false)
    }

    async function fetchCategories() {
        const result = await ApiCall({
            method: "GET",
            path: "/category"
        })

        if (!result.isSuccessful) {
            showErrorSnackBar(result.message)
            return categories;
        }
        const categoriesResult = result.data
        return categoriesResult
    }

    async function fetchProducts() {
        const result = await ApiCall({
            method: "GET",
            path: "/products"
        })

        if (!result.isSuccessful) {
            showErrorSnackBar(result.message)
            return products;
        }
        const productsResult = result.data
        return productsResult
    }

    function showErrorSnackBar(message: string) {
        setErrorMessage(message)
        setIsError(true)
    }
    return {
        products, categories, isLoading, isError, errorMessage
    }
}
