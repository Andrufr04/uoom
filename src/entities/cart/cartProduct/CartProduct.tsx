import { useContext } from 'react'
import { AppContext } from '../../../features/app_context/AppContext'
import './CartProduct.css'
import type CartItem from '../model/CartItem'
import CartDao from '../api/CartDao'

export default function CartProduct({cartItem}: {cartItem:CartItem}) {
    const { cart, setCart} = useContext(AppContext)

    const incClick = () => {
        let newCart = { ...cart }
        let item = newCart.items.find(i => i.product.id == cartItem.product.id)
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
        let item = newCart.items.find(i => i.product.id == cartItem.product.id)
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

    const removeClick = () => {
        if (confirm("Видалити позицію")) {
            setCart({ ...cart,
                items: cart.items.filter(ci => ci.product.id !== cartItem.product.id),
                price: cart.price - cartItem.price
            })
        }
    }

    return <div className="row m-3 p-2 cart-item-card">
        <div className="col col-2 ">
            <img src={cartItem.product.imgUrl} alt={cartItem.product.name} className="w-100"/>
        </div>

        <div className="col col-7">
            <h3 className='ellipsis cart-item-name'>{cartItem.product.name}</h3>
            <div className='cart-item-metadata'>1PC</div>
            <div className='cart-item-metadata'>Доставка: 24-29 січня</div>
            <div className='cart-item-buttons'>
                <div className='cart-item-cnt-btns'> 
                    <div className="cart-item-cnt-btn" onClick={() => decClick()}>-</div>
                    {cartItem.cnt} 
                    <div className="cart-item-cnt-btn" onClick={() => incClick()}>+</div>
                </div>
                <div className="col col-1 text-end"><i className="bi bi-trash3" role='button' onClick={removeClick}></i></div>
            </div>
        </div>
        <div className="col col-3 text-end">
            <h4>{(cartItem.price).toMoney()} грн</h4>
        </div>
    </div>
}
