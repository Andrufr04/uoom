import { Link, Outlet } from "react-router-dom"
import "./ui/Layout.css"
import SiteButton from "../buttons/SiteButton"
import ButtonTypes from "../buttons/types/ButtonTypes"

export default function Layout() {
    return <>
        <header className="container px-2">
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
                    <Link to="/" className="navbar-brand">Uoom</Link>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <form className="d-flex flex-grow-1" role="search">
                            <input className="form-control me-2 my-form-control" type="search" placeholder="Пошук" aria-label="Search" />
                            <div style={{marginLeft: "-28px"}}><SiteButton text="Знайти" buttonType={ButtonTypes.Pink}/></div>
                        </form>
                    </div>
                    <div className="nav-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" name="notification-linear-24" aria-hidden="true" type="mono" className="icon___OznRH" style={{ width: "24px", height: "24px" }}><path fill="currentColor" d="M10.224 20.974a2.04 2.04 0 0 1-.274-1.025h4.102A2.056 2.056 0 0 1 12.001 22a2.05 2.05 0 0 1-1.777-1.026"></path><path fill="currentColor" fill-rule="evenodd" d="M19.478 17.17c.646.645.184 1.753-.728 1.753H5.242c-.913 0-1.364-1.108-.718-1.754l1.323-1.323v-5.128c0-3.159 1.672-5.785 4.616-6.482v-.698a1.536 1.536 0 1 1 3.075 0v.698c2.934.697 4.616 3.333 4.616 6.482v5.128zM13.065 6.231c1.8.428 3.039 2.054 3.039 4.486v5.641c0 .283-.23.513-.513.513H8.41a.513.513 0 0 1-.513-.513v-5.641c0-2.444 1.23-4.058 3.037-4.486a4.6 4.6 0 0 1 2.13 0" clip-rule="evenodd"></path></svg>
                        <div>Сповіщення</div>
                    </div>
                    <div className="nav-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" name="bar-user-linear-24" aria-hidden="true" type="mono" className="icon___OznRH" style={{ width: "24px", height: "24px" }}><path fill="currentColor" fill-rule="evenodd" d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7m-2.536 8.465A5 5 0 0 1 8 14h8a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536" clip-rule="evenodd"></path></svg>
                        <div>Увійти</div>
                    </div>
                    <div className="nav-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" name="archive-linear-24" aria-hidden="true" type="mono" className="icon___OznRH" style={{ width: "24px", height: "24px" }}><path fill="currentColor" fill-rule="evenodd" d="M21 18V9.732A2 2 0 0 0 22 8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3a2 2 0 0 0 1 1.732V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3M5 10h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm5 2h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2M4 8V5h16v3z" clip-rule="evenodd"></path></svg>
                        <div>Мої замовлення</div>
                    </div>
                    <div className="nav-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" name="bar-cart-linear-24" aria-hidden="true" type="mono" className="icon___OznRH" style={{ width: "24px", height: "24px" }}><path fill="currentColor" fill-rule="evenodd" d="M1 3a1 1 0 0 1 1-1h3.199a1 1 0 0 1 .987.842L6.852 7H22a1 1 0 0 1 .98 1.196l-1.507 7.558a2.8 2.8 0 0 1-1.035 1.64 2.94 2.94 0 0 1-1.834.606H9.472a2.94 2.94 0 0 1-1.834-.605 2.8 2.8 0 0 1-1.035-1.64L5.02 8.205l-.008-.047L4.346 4H2a1 1 0 0 1-1-1m6.231 6 1.33 6.347c.036.174.136.34.297.463.16.124.369.194.588.19h9.184a.94.94 0 0 0 .588-.19.8.8 0 0 0 .296-.46L20.781 9zM7 22a2 2 0 1 1 4 0 2 2 0 0 1-4 0m10 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clip-rule="evenodd"></path></svg>
                        <div>Кошик</div>
                    </div>
                </div>
            </nav>
        </header>
        <main className="container px-2"><Outlet /></main>
        <footer className="container px-2">
            <Link to="/privacy">Політика конфіденційност</Link>
            <div>&copy; AIS 2025 (Odesa)</div>
        </footer>
    </>
}
