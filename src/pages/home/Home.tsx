import { useEffect, useState } from "react"
import type { PropositionCard } from "../../entities/proposition/PropositionType"
import Proposition from "../../features/proposition/Proposition"
import "./ui/Home.css"
import PropositionDao from "../../entities/proposition/api/PropositionDao"

export default function Home() {
    const [propositionsCards, setPropositionsCards] = useState<PropositionsContent|null>(null)

    useEffect(() => {
        PropositionDao.getProposition().then(p => 
            setPropositionsCards({
                propositions: p
            })
        )
    }, [])
    
    return <>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner carusel-bg">
                {propositionsCards?.propositions.map(pro => 
                    <Proposition prop={pro}/>
                )}
            </div>
            <div className="">
                <button className="carousel-control-prev carusel-button" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <div className="carusel-button-icon"><i className="bi bi-chevron-left"></i></div>
                </button>
                <button className="carousel-control-next carusel-button" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <div className="carusel-button-icon" ><i className="bi bi-chevron-right"></i></div>
                </button>
            </div>
        </div>
    </>
}

type PropositionsContent = {
    propositions: Array<PropositionCard> 
}