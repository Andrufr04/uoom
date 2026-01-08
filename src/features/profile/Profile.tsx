import { useContext } from "react"
import "./ui/Profile.css"
import { AppContext } from "../app_context/AppContext"

export default function Profile({visible}:{visible:boolean}) {
    const { setUser, showToast } = useContext(AppContext)

    const exitAuth = () => {
        window.localStorage.removeItem("cool-uoom-user")
        setUser(null)
        showToast({message:"Трясця, бувай мій милий друг ("})
    }

    return <div className="profile-menu" style={{display: visible ? "block" : "none"}}>
        <div className="profile-menu-button">Моє вибране</div>
        <div className="profile-menu-button profile-menu-log-out-button" onClick={exitAuth}>Вихід</div>
    </div>
}