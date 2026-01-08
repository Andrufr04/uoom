import { useContext } from "react";
import CartButton from "../../../features/cart_button/CartButton";
import type { ProductType } from "../model/ProductType";
import './ProductCard.css'
import { AppContext } from "../../../features/app_context/AppContext";

export default function ProductCard({ product }: { product: ProductType }) {
    const {cart, setCart} = useContext(AppContext)

    const buyClick = () => {
        let newCart = {...cart, price: cart.price + product.price};
        let item = newCart.items.find(i => i.product.id == product.id);
        if(item) {
            item.cnt += 1;
            item.price += product.price;
        }
        else {
            newCart.items.push({
                product: product, 
                price: product.price, 
                cnt: 1
            });
        }
        setCart(newCart);
    };
    
    return <div className="product-card">
        <div>
            <img className="product-img" src={product.imgUrl} alt="" />
        </div>
        <div className="product-price-row">
            <div className="product-price">{product.price} грн</div>
            <CartButton action={buyClick} />
        </div>
        <div className="ellipsis product-name">{product.name}</div>
        <div className="product-rating-bg">
        <div className="product-rating-row">
            <div className="product-rating"><i className="bi bi-star-fill product-star"></i> {product.rating}</div> / <div>{product.reviewAmount}</div>
        </div>
        </div>
    </div>
}



