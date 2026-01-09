import { useEffect, useState } from "react"
import "./ui/Product.css"
import { useParams } from "react-router-dom"
import type { ProductType, Review } from "../../entities/product/model/ProductType"
import ProductDao from "../../entities/product/api/ProductDao"
import SiteButton from "../../features/buttons/SiteButton"
import ButtonTypes from "../../features/buttons/types/ButtonTypes"

export default function Product() {
    const { slug } = useParams<string>()
    const [pageData, setPageData] = useState<ProductType | null | undefined>(undefined)

    useEffect(() => {
        if (slug) {
            setPageData(undefined)
            ProductDao
                .getProduct(slug)
                .then(setPageData)
                .catch(err => {
                    setPageData(null)
                    console.error(err)
                })
                .finally()
        }
    }, [slug])

    return <div>
        <div className="product-info">
            <div className="product-info-col1">
                <div className="product-info-img-container">
                    <img className="product-info-img" src={pageData?.imgUrl} alt="" />
                </div>
                <div>
                    <div className="product-info-h">Відгуки: </div>
                    <div>{pageData?.reviews?.map(r => <Review review={r} />)}</div>
                </div>
            </div>
            <div className="product-info-col2">
                <div className="product-info-text">
                    <div className="product-info-name">{pageData?.name}</div>
                    <div className="product-info-icon"><i className="bi bi-heart"></i></div>
                    <div className="product-info-icon"><i className="bi bi-share-fill"></i></div>
                </div>
                <div className="product-info-rating">
                    <div className="product-info-review"><i className="bi bi-star-fill star"></i> {pageData?.rating}</div>
                    <div className="product-info-reviewAmount">{pageData?.reviewAmount} покупок</div>
                </div>
                <hr />
                <div className="product-info-order">
                    <div className="product-info-price">{pageData?.price} грн</div>
                    <SiteButton text="додати до кошика" buttonType={ButtonTypes.Pink}></SiteButton>
                </div>
                <div className="product-info-sale">
                    <div>При замовленні 3+ будь-яких товарів </div>
                    <div className="product-info-sale-text"> ЗНИЖКА 15%</div>
                </div>
                <div>
                    <div className="product-info-h">Опис: </div>
                    <pre className="description">{pageData?.description}</pre>
                </div>
            </div>
        </div>
    </div>
}

function Review({ review }: { review: Review }) {
    return <div className="review">
        <div className="review-info">
            <div className="review-person">
                <div className="review-icon"><i className="bi bi-person-fill"></i></div>
                <div>
                    <div className="review-name">{review.name}</div>
                    <div className="review-star">
                        {Array.from({ length: Math.round(review.stars ?? 1) }, () => <span>★</span>)}
                        {Array.from({ length: Math.round(5-(review.stars ?? 1)) }, () => <span className="grey-stars">★</span>)}
                        
                        {review.stars}</div>
                </div>
            </div>
            <div className="review-message">{review.message}</div>
        </div>
    </div>
}