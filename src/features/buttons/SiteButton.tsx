import ButtonTypes from "./types/ButtonTypes"
import "./ui/SiteButton.css"

export default function SiteButtons({buttonType, text, action} : {buttonType:ButtonTypes, text:string, action?: () => void}) {
    const extraClass = 
    buttonType == ButtonTypes.Pink ? "button-pink"
    : buttonType == ButtonTypes.Black ? "button-black"
    : ""
    
    return <div className={"site-button " + extraClass} onClick={action}>
        {text}
    </div>
} 