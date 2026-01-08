import ButtonTypes from "./types/ButtonTypes"
import "./ui/SiteButton.css"

export default function SiteButton({buttonType, text, action, width, borderRadius} : {buttonType:ButtonTypes, text:string, action?: () => void, width?: string, borderRadius?: string}) {
    const extraClass = 
    buttonType == ButtonTypes.Pink ? "button-pink"
    : buttonType == ButtonTypes.Black ? "button-black"
    : ""
    
    return <div className={"site-button " + extraClass} onClick={action} style={{width:width, borderRadius:borderRadius}}>
        {text}
    </div>
} 