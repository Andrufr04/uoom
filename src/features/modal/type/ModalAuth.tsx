import { Link } from "react-router-dom"
import SiteButton from "../../buttons/SiteButton"
import ButtonTypes from "../../buttons/types/ButtonTypes"
import "./ModalAuth.css"
import { useContext, useState } from "react";
import UserDao from "../../../entities/user/api/UserDao";
import { AppContext } from "../../app_context/AppContext";

export default function ModalAuth() {
    const {setUser, showToast, clearModal, setBusy} = useContext(AppContext)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    
const onAuthClick = () => {
    setBusy(true)
        UserDao
            .authenticate(email, password)
            .then(res => {
                if(res == null) {
                    alert("У вході відмовлено")
                }
                else {
                    window.localStorage.setItem("cool-uoom-user", JSON.stringify(res))
                    setUser(res)
                    showToast({message: "Ви увійшли в систему )"})
                    clearModal()
                }
            })
            .finally(() => setBusy(false));
    };

    return <div className="modal-auth">
        <div className="modal-auth-img"><img src="/img/cbce28099d409f8e.png" /></div>
        <div className="modal-auth-title">Авторизуйтеся, щоб не втратити історію ваших покупок</div>
        <div className="modal-auth-inputs">
            <div className="coolinput">
                <label htmlFor="input" className="text">Ел. пошта</label>
                <input type="email" placeholder="" name="email" id="email" className="input" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="coolinput">
                <label htmlFor="input" className="text">Пароль</label>
                <input type="password" placeholder="" name="email" id="email" className="input" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
        </div>
        <div className="modal-auth-button"><SiteButton buttonType={ButtonTypes.Black} text={"Увійти"} width="100%" borderRadius="10px" action={onAuthClick}/></div>
        <div className="modal-auth-options">
            <div role="button">Забули пароль?</div>
            <div role="button">Реєстрація</div>
        </div>
        <div className="modal-auth-using">
            <div className="modal-auth-using-col modal-auth-line"></div>
            <div className="modal-auth-using-text">АБО УВІйдіть через</div>
            <div className="modal-auth-using-col modal-auth-line"></div>
        </div>
        <div className="modal-auth-using-icons">
            <div className="modal-auth-using-g-icon" role="button"><img src="https://web-client.joomcdn.net/web-client/772d135b35dd79bc.svg" alt="" /></div>
            <div className="modal-auth-using-f-icon" role="button"><img src="/img/f.svg" alt="" /></div>
            <div className="modal-auth-using-apple-icon" role="button"><img src="/img/apple.svg" alt="" /></div>
        </div>
    </div>
}