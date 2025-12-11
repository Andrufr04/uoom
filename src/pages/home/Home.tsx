import SiteButton from "../../features/buttons/SiteButton"
import ButtonTypes from "../../features/buttons/types/ButtonTypes"
import CartButton from "../../features/cart_button/CartButton"
import "./ui/Home.css"

export default function Home() {
    return <>
        <h1>Home, bitter home</h1>
        <SiteButton text="Button1" buttonType={ButtonTypes.Pink}/>
        <SiteButton text="Button2" buttonType={ButtonTypes.Black}/>
        <CartButton/>
    </>
}