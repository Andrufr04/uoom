import { useEffect, useState } from "react"
import type { PropositionCard } from "../../entities/proposition/PropositionType"
import Proposition from "../../features/proposition/Proposition"
import "./ui/Home.css"
import PropositionDao from "../../entities/proposition/api/PropositionDao"
import CategoriesDao from "../../entities/categories/api/CategoriesDao"
import type { CategoryType } from "../../entities/categories/model/CategoryType"
import type { ProductType } from "../../entities/product/model/ProductType"
import ProductDao from "../../entities/product/api/ProductDao"
import ProductCard from "../../entities/product/ui/ProductCard"

export default function Home() {
    const [propositionsCards, setPropositionsCards] = useState<PropositionsContent | null>(null)
    const [pageData, setPageData] = useState<CategoryType | null>(null)

    useEffect(() => {
        PropositionDao.getProposition().then(p =>
            setPropositionsCards({
                propositions: p
            })
        )
        CategoriesDao.getCategory('tovary-dlya-domu')
            .then(setPageData)
            .catch(() => setPageData(null))

    }, [])

    return <>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner carusel-bg">
                {propositionsCards?.propositions.map(pro =>
                    <Proposition prop={pro} />
                )}
            </div>
            <div className="">
                <button className="carousel-control-prev carusel-button" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <div className="carusel-button-icon"><i className="bi bi-chevron-left"></i></div>
                </button>
                <button className="carousel-control-next carusel-button" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <div className="carusel-button-icon" ><i className="bi bi-chevron-right"></i></div>
                </button>
            </div>
        </div>
        <div>
            <div className="products-container">
                {pageData?.products.map(product => <ProductCard product={product} key={product.id} />)}
            </div>
        </div>
    </>
}

type PropositionsContent = {
    propositions: Array<PropositionCard>
}

type Products = {
    products: Array<ProductType>
}