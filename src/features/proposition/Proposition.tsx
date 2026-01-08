import "./ui/Proposition.css"
import type { PropositionCard } from "../../entities/proposition/PropositionType";

export default function Proposition({prop} : {prop:PropositionCard}) {
    return <div className={"carousel-item " + prop.additional} style={{background: prop.color}}>
        <div className="prop">
            <div className="prop-left">
                <div className="text-container">
                    <div className="prop-title">{prop.title}</div>
                    <div className="prop-text">{prop.text}</div>
                </div>
            </div>
            <div className="prop-right">
                <img src={prop.imgUrl} alt={prop.title} className="prop-img"/>
            </div>
        </div>
    </div>
}