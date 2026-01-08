import { useEffect, useState } from "react"
import type { Category } from "../../entities/categories/CategoriesType"
import "./ui/Categories.css"
import CategoriesDao from "../../entities/categories/api/CategoriesDao"
import { Link } from "react-router-dom"

export default function Categoies() {
    const [headerCategories, setHeaderCategories] = useState<HeaderCategoriesContent|null>(null)
    const [extended, setExtended] = useState<boolean>(false)

    useEffect(() => {
        CategoriesDao.getCategories().then(c => 
            setHeaderCategories({
                categories: c
            })
        )
    }, [])

    return <div className="categories-container">
        <div className="categories">
            <div onClick={() => setExtended(!extended)} className="categories-highlight">
                <svg width="16" height="10" className="me-1"><path fill="var(--main-color)" d="M.883 10C.396 10 0 9.552 0 9s.396-1 .883-1h14.234c.487 0 .883.448.883 1s-.396 1-.883 1H.883zm0-4C.396 6 0 5.552 0 5s.396-1 .883-1h14.234c.487 0 .883.448.883 1s-.396 1-.883 1H.883zm0-4C.396 2 0 1.552 0 1s.396-1 .883-1h14.234c.487 0 .883.448.883 1s-.396 1-.883 1H.883z"></path></svg>
                <div>Всі категорії</div>
            </div>
            <Link to="/privacy" className="categories-highlight"><i className="bi bi-tag-fill me-1 tag"></i>Аутлет</Link>
            <Link to="/privacy" className="categories-highlight"><i className="bi bi-gift-fill me-1"></i>Подарунки за покупку</Link>
            {headerCategories?.categories
            .map(cat => 
                <Link to={'category/' + cat.slug} className="category">{cat.title}</Link>
            )}
        </div>
        {extended &&
        <div onClick={() => setExtended(false)} className="extended-categories-container">
            <div className="extended-categories">
                {headerCategories?.categories.map(cat => 
                    <Link to={'category/' + cat.slug} className="extended-category"><img src={cat.imageUrl} alt={cat.title} />{cat.title}</Link>
                )}
            </div>
            <div className="shadow-sonic-top-ultra-plus-mega-pro-max-verstappen"></div>
        </div>
        }
    </div>
}

type HeaderCategoriesContent = {
    categories: Array<Category>
}