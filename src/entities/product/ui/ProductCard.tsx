import { useContext } from "react";
import CartButton from "../../../features/cart_button/CartButton";
import type { ProductType } from "../model/ProductType";
import './ProductCard.css'
import { AppContext } from "../../../features/app_context/AppContext";
import CartDao from "../../cart/api/CartDao";
import { Link } from "react-router-dom";

export default function ProductCard({ product }: { product: ProductType }) {
    const { cart, setCart } = useContext(AppContext)

    const buyClick = () => {
        let newCart = { ...cart, price: cart.price + product.price };
        let item = newCart.items.find(i => i.product.id == product.id);
        if (item) {
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

    const incClick = () => {
        let newCart = { ...cart }
        let item = newCart.items.find(i => i.product.id == product.id)
        if (item) {
            if (item.product.stock && item.cnt >= item.product.stock) {
                return
            }
            item.cnt += 1
            CartDao.calcPrices(newCart)
            setCart(newCart)
        }
    }

    const decClick = () => {
        let newCart = { ...cart }
        let item = newCart.items.find(i => i.product.id == product.id)
        if (item) {
            if (item.cnt === 1) {
                newCart.items.splice(newCart.items.indexOf(item), 1)
            } else {
                item.cnt -= 1
            }
            CartDao.calcPrices(newCart)
            setCart(newCart)
        }
    }

    const cartItem = cart.items.find(ci => ci.product.id === product.id)

    return <Link to={"/product/" + product.slug} className="product-card">
        <div>
            <img className="product-img" src={product.imgUrl} alt="" />
        </div>
        <div className="product-price-row" onClick={e => {e.stopPropagation(); e.preventDefault()}}>
            <div className="product-price">{product.price} грн</div>
            {cartItem
                ? <div className='cart-item-cnt-btns'>
                    <div className="cart-item-cnt-btn" onClick={decClick}>-</div>
                    {cartItem.cnt}
                    <div className="cart-item-cnt-btn" onClick={incClick}>+</div>
                </div>
                : <CartButton action={buyClick} />
            }
        </div>
        <div className="ellipsis product-name">{product.name}</div>
        <div className="product-rating-bg">
            <div className="product-rating-row">
                <div className="product-rating"><i className="bi bi-star-fill product-star"></i> {product.rating}</div> / <div>{product.reviewAmount}</div>
            </div>
        </div>
    </Link>
}



