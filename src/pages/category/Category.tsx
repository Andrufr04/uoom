import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { CategoryType } from "../../entities/categories/model/CategoryType"
import CategoriesDao from "../../entities/categories/api/CategoriesDao"
import ProductCard from "../../entities/product/ui/ProductCard"
import "./ui/Category.css"
import { AppContext } from "../../features/app_context/AppContext"

export default function Category () {
    const {slug} = useParams()
    const [pageData, setPageData] = useState<CategoryType|null>(null)
    const {setBusy} = useContext(AppContext)

    useEffect(() => {
        setBusy(true)
        if (typeof(slug) != 'undefined') {
            CategoriesDao.getCategory(slug)
            .then(setPageData)
            .catch(() => setPageData(null))
            .finally(() => setBusy(false))
        }
    }, [slug])
    
    return <div>
        <div className="products-container">
            {pageData?.products.map(product => <ProductCard product={product} key={product.id}/>)}
        </div>
    </div>
}