import { useContext } from "react"
import "./ui/Cart.css"
import { AppContext } from "../../features/app_context/AppContext"
import CartProduct from "../../entities/cart/cartProduct/CartProduct"
import SiteButton from "../../features/buttons/SiteButton"
import ButtonTypes from "../../features/buttons/types/ButtonTypes"

export default function Cart() {
    const {cart} = useContext(AppContext)

    return (cart.items.length > 0 ? 
    <div className="cart">
        <div className="cart-text">Кошик</div>
        <div className="cart-content">
            <div className="col col-8">{cart.items.map(i => <CartProduct cartItem={i}/>)}</div>
            <div className="col col-4 cart-order m-3 p-4">
                <div className="cart-order-text">Ваше замовлення</div>
                <div>
                    <div className="cart-cost">
                        <div>Вартість товарів:</div>
                        <div>{(cart.items.reduce((s, ci) => s + ci.price, 0)).toMoney()} грн</div>
                    </div>
                    <div className="cart-cost cart-total-cost">
                        <div>Разом:</div>
                        <div className="cart-total-price">{(cart.items.reduce((s, ci) => s + ci.price, 0)).toMoney()} грн</div>
                    </div>
                </div>
                <div className="order-btn"><SiteButton text="Замовити" buttonType={ButtonTypes.Pink} width="100%"/></div>
            </div>
        </div>
    </div>
    : 
    <div className="empty-cart">
        <div className="empty-cart-img"><img src="/img/emptyCart.png" alt="empty cart"/></div>
        <div className="empty-cart-info">Ваш кошик порожній</div>
        <SiteButton text="Подивитись товари" buttonType={ButtonTypes.Pink}></SiteButton>
    </div>)
}