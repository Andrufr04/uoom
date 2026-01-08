import type { PropositionCard } from "../PropositionType";

export default class PropositionDao {
    static cachePropositions:Array<PropositionCard>|undefined

    static getProposition() {
        return new Promise<Array<PropositionCard>>((resolve, _) => {
            if(typeof PropositionDao.cachePropositions != 'undefined') {
                resolve(PropositionDao.cachePropositions)
            } 
            else setTimeout(() => {
                PropositionDao.cachePropositions = [
                    {
                        color: "#c32a58ff",
                        imgUrl: "/img/c002028547b49a9862b85f76e23ce53d13793c61_original.png",
                        title: " Знижки на обмежену кількість",
                        text: "Найкраща ціна на ринку",
                        additional: "active"
                    },
                    {
                        color: "#8915b0ff",
                        imgUrl: "/img/445e3985eacfdfa35666b5c94b09c4af82caf99d_original.png",
                        title: "Аутлет",
                        text: "Фінальний розпродаж року",
                    },
                    {
                        color: "#0f8a65ff",
                        imgUrl: "/img/576238812108d617dcad5d191206abbff67711e1_original.png",
                        title: "Низькі ціни щодня",
                        text: "Фінальний розпродаж року"
                    }
                ]
                resolve(PropositionDao.cachePropositions)
            }, 300)
        })
    }
}