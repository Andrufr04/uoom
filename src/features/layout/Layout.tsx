import { Link, Outlet } from "react-router-dom"
import "./ui/Layout.css"
import SiteButton from "../buttons/SiteButton"
import ButtonTypes from "../buttons/types/ButtonTypes"
import Categoies from "../categories/Categories.tsx"
import { useContext, useState } from "react"
import { AppContext } from "../app_context/AppContext.ts"
import ModalAuth from "../modal/type/ModalAuth.tsx"
import Profile from "../profile/Profile.tsx"

export default function Layout() {
    const {showModal, user, cart} = useContext(AppContext)
    const [visible, setVisible] = useState(false)

    return <>
        <header className="container px-2" onClick={() => setVisible(false)}>
            <div className="top-header">
                <ul className="nav-list">
                    <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                    </li>
                    <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                    </li>
                </ul>
                <div className="info">
                    <ul className="nav-list">
                        <li>Підтримка</li>
                        <li>Доставка</li>
                        <li>Гарантія</li>
                        <li>
                            <div className="add"> Uoom Geek</div>
                        </li>
                    </ul>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid p-0">
                    <div className="logo">
                        <Link to="/">
                            <div>
                                <div className="uoom-dot"></div>
                                <img src="/logo.png" alt="Uoom" className="logo-img"/>
                            </div>
                        </Link>
                        <Link to="/" className="navbar-brand logo-text">UOOM</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <form className="d-flex flex-grow-1" role="search">
                            <input className="form-control me-2 my-form-control" type="search" placeholder="Пошук" aria-label="Search" />
                            <div style={{marginLeft: "-28px"}}><SiteButton text="Знайти" buttonType={ButtonTypes.Pink}/></div>
                        </form>
                    </div>
                    <div className="d-flex ">
                        <div className="nav-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" name="notification-linear-24" aria-hidden="true" type="mono" className="icon___OznRH" style={{ width: "24px", height: "24px" }}><path fill="currentColor" d="M10.224 20.974a2.04 2.04 0 0 1-.274-1.025h4.102A2.056 2.056 0 0 1 12.001 22a2.05 2.05 0 0 1-1.777-1.026"></path><path fill="currentColor" fill-rule="evenodd" d="M19.478 17.17c.646.645.184 1.753-.728 1.753H5.242c-.913 0-1.364-1.108-.718-1.754l1.323-1.323v-5.128c0-3.159 1.672-5.785 4.616-6.482v-.698a1.536 1.536 0 1 1 3.075 0v.698c2.934.697 4.616 3.333 4.616 6.482v5.128zM13.065 6.231c1.8.428 3.039 2.054 3.039 4.486v5.641c0 .283-.23.513-.513.513H8.41a.513.513 0 0 1-.513-.513v-5.641c0-2.444 1.23-4.058 3.037-4.486a4.6 4.6 0 0 1 2.13 0" clip-rule="evenodd"></path></svg>
                            <div>Сповіщення</div>
                        </div>
                        {user
                        ? 
                        <div onClick={e => e.stopPropagation()} className="profile">
                            <div className="nav-button" onClick={() => setVisible(true)}>
                                <img src="/img/CoolUser.jpg" className="user-profile-img" />
                                <div>Профіль</div>
                            </div>
                            <Profile visible={visible}/>
                        </div>
                        :
                        <div className="nav-button" onClick={() => showModal({
                            isCancellable: true,
                            content: <ModalAuth/>
                        })}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" name="bar-user-linear-24" aria-hidden="true" type="mono" className="icon___OznRH" style={{ width: "24px", height: "24px" }}><path fill="currentColor" fill-rule="evenodd" d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7m-2.536 8.465A5 5 0 0 1 8 14h8a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536" clip-rule="evenodd"></path></svg>
                            <div>Увійти</div>
                        </div>
                        }
                        <div className="nav-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" name="archive-linear-24" aria-hidden="true" type="mono" className="icon___OznRH" style={{ width: "24px", height: "24px" }}><path fill="currentColor" fill-rule="evenodd" d="M21 18V9.732A2 2 0 0 0 22 8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3a2 2 0 0 0 1 1.732V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3M5 10h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm5 2h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2M4 8V5h16v3z" clip-rule="evenodd"></path></svg>
                            <div>Мої замовлення</div>
                        </div>
                        <div className="nav-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" name="bar-cart-linear-24" aria-hidden="true" type="mono" className="icon___OznRH" style={{ width: "24px", height: "24px" }}><path fill="currentColor" fill-rule="evenodd" d="M1 3a1 1 0 0 1 1-1h3.199a1 1 0 0 1 .987.842L6.852 7H22a1 1 0 0 1 .98 1.196l-1.507 7.558a2.8 2.8 0 0 1-1.035 1.64 2.94 2.94 0 0 1-1.834.606H9.472a2.94 2.94 0 0 1-1.834-.605 2.8 2.8 0 0 1-1.035-1.64L5.02 8.205l-.008-.047L4.346 4H2a1 1 0 0 1-1-1m6.231 6 1.33 6.347c.036.174.136.34.297.463.16.124.369.194.588.19h9.184a.94.94 0 0 0 .588-.19.8.8 0 0 0 .296-.46L20.781 9zM7 22a2 2 0 1 1 4 0 2 2 0 0 1-4 0m10 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clip-rule="evenodd"></path></svg>
                            <div>Кошик</div>
                            <div className="cart-amount">{cart.items.reduce((n, item) => n + item.cnt, 0)}</div>
                        </div>
                    </div>
                </div>
            </nav>
            <Categoies/>
        </header>
        <main className="container px-2" onClick={() => setVisible(false)}><Outlet /></main>

        <div className="footer" onClick={() => setVisible(false)}>
            <footer className="container px-2">
                <div className="footer-row">
                    <div className="footer-col footer-card">
                        <div className="footer-card-title">Більше акцій та знижок у додатку Joom</div>
                        <div className="footer-img"><img src="/img/qr.png" alt="" className="footer-img"/></div>
                        <div className="footer-card-info">Скануйте, щоб завантажити додаток</div>
                        <div className="footer-card-imgs">
                            <img className="badge___LMa_g" alt="App Store" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiMwMDAiIHJ4PSI1Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjYgMjAuN2E1IDUgMCAwIDEgMi40LTQuMiA1LjEgNS4xIDAgMCAwLTQtMi4yYy0xLjctLjItMy40IDEtNC4zIDEtLjggMC0yLjItMS0zLjYtMWE1LjQgNS40IDAgMCAwLTQuNiAyLjhjLTIgMy40LS41IDguNCAxLjQgMTEuMiAxIDEuMyAyIDIuOCAzLjUgMi44IDEuNC0uMSAyLTEgMy42LTEgMS43IDAgMi4yIDEgMy43IDEgMS41LS4xIDIuNC0xLjQgMy40LTIuOC42LTEgMS4yLTIgMS41LTMuMWE0LjkgNC45IDAgMCAxLTMtNC41Wm0tMi43LTguMmE1IDUgMCAwIDAgMS0zLjYgNSA1IDAgMCAwLTQgMy4zYy0uMy42LS40IDEuMi0uMyAxLjhhNC4yIDQuMiAwIDAgMCAzLjMtMS41WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+Cg=="></img>
                            <img className="badge___LMa_g" alt="Google Play" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiMwMDAiIHJ4PSI1Ii8+PHBhdGggZmlsbD0iIzcyRDBGNSIgZD0iTTguNCA3LjVjLS4yLjMtLjQuOC0uNCAxLjRWMzFjMCAuNy4yIDEuMS40IDEuNGwuMS4xIDEyLjQtMTIuNHYtLjNMOC41IDcuNHYuMSIvPjxwYXRoIGZpbGw9InVybCgjYSkiIGQ9Im0yNSAyNC4yLTQtNHYtLjRsNC00LjFoLjFsNSAyLjhjMS4zLjggMS4zIDIuMSAwIDIuOWwtNSAyLjgiLz48cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNMjUuMSAyNC4yIDIxIDIwIDguNSAzMi40Yy40LjUgMS4yLjYgMiAwbDE0LjYtOC4yWiIvPjxwYXRoIGZpbGw9InVybCgjYykiIGQ9Ik0yNS4xIDE1LjcgMTAuNSA3LjRjLS44LS40LTEuNi0uNC0yIC4xTDIwLjkgMjBsNC4yLTQuM1oiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIyOS4xIiB4Mj0iNC45IiB5MT0iMjAiIHkyPSIyMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGOUUxMDYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGNzkwMTEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjIyIiB4Mj0iLS44IiB5MT0iMjIuNiIgeTI9IjQ1LjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUYyRjQxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQzgwRDZCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIuMyIgeDI9IjE4LjkiIHkxPSItNS45IiB5Mj0iMTIuNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMzOUEzNkEiLz48c3RvcCBvZmZzZXQ9Ii43IiBzdG9wLWNvbG9yPSIjNkNDODU4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkNDODU4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+Cg=="></img>
                            <img className="badge___LMa_g" alt="Huawei" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNDODEwMkUiIHJ4PSI1Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTcuNiAyNC4yaDF2NWgtMXYtMkg1djJINHYtNWgxdjJoMi42di0yWm02LjEgMi44YzAgLjgtLjQgMS4zLTEuMiAxLjMtLjggMC0xLjItLjUtMS4yLTEuM3YtMi44aC0xLjFWMjdjMCAxLjQuOCAyLjIgMi4zIDIuMiAxLjQgMCAyLjMtLjggMi4zLTIuMnYtMi44aC0xVjI3Wm0xMi42LjYtMS4yLTMuNGgtLjlMMjMgMjcuNmwtMS4yLTMuNGgtMS4ybDIgNWguOGwxLjMtMy4zIDEuMiAzLjJoLjlsMS45LTQuOWgtMS4ybC0xLjIgMy40Wm00LjMtLjZoMnYtLjloLTJ2LTFoM3YtLjloLTR2NWg0di0xaC0zVjI3Wm00LjMgMi4xSDM2di00LjloLTF2NVptLTE4LTEtLjQgMWgtMS4xbDIuMy00LjloMWwyLjQgNWgtMS4ybC0uNS0xSDE3Wm0uNS0uOUgxOWwtLjgtMS43LS44IDEuN1pNMjAgMThhNyA3IDAgMCAxLTctN2gxYTYgNiAwIDAgMCAxMiAwaDFhNyA3IDAgMCAxLTcgN1oiLz48L3N2Zz4K"></img>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="footer-title">Користувачам</div>
                        <Link to="/privacy">Каталог</Link>
                        <Link to="/privacy">Підтримка</Link>
                        <Link to="/privacy">Політика конфіденційносьі</Link>
                        <Link to="/privacy">Умови використання</Link>
                        <Link to="/privacy">Спеціальні можливості</Link>
                        <Link to="/privacy">Популярні запити на Uoom</Link>
                    </div>
                    <div className="footer-col">
                        <div className="footer-title">Партнерам</div>
                        <Link to="/privacy">Стати продавцем</Link>
                        <Link to="/privacy">Угода для продавців</Link>
                    </div>
                    <div className="footer-col">
                        <div className="footer-title">Компанія</div>
                        <Link to="/privacy">Про нас</Link>
                        <Link to="/privacy">Правовласники</Link>
                        <Link to="/privacy">Безпека товарів</Link>
                    </div>
                    <div className="footer-col">
                        <div className="footer-title">Компанії Joom Group</div>
                        <Link to="/privacy">Uoom Logistics</Link>
                        <Link to="/privacy">Onfy</Link>
                        <Link to="/privacy">Uoom Pulse</Link>
                    </div>
                </div>

                <div className="copy">&copy; ADA 2025 Uoom</div>
                <hr className="footer-hr"/>
            </footer>
        </div>
    </>
}
