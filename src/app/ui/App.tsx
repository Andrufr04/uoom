import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../../features/layout/Layout"
import Home from "../../pages/home/Home"
import Privacy from "../../pages/privacy/Privacy"
import Category from "../../pages/category/Category"
import type ToastData from "../../features/toast/ToastData"
import { useEffect, useState } from "react"
import { AppContext } from "../../features/app_context/AppContext"
import '../../features/toast/ui/Toast.css'
import type ModalData from "../../features/modal/ModalData"
import Modal from "../../features/modal/ui/Modal"
import type { UserType } from "../../entities/user/model/UserType"
import type CartType from "../../entities/cart/model/CartType"
import CartDao from "../../entities/cart/api/CartDao"
import "./App.css"

function App() {
  const [user, setUser] = useState<UserType | null>(null);

  const [toastData, setToastData] = useState<ToastData | null>(null)
  const [toastQueue, setToastQueue] = useState<Array<ToastData>>([])

  const [isBusy, setBusy] = useState<boolean>(false);

  const [cart, setCart] = useState<CartType>(CartDao.restoreSaved());
  useEffect(() => {
    CartDao.save(cart);
  }, [cart]);

  const dequeueToast = (id: number) => {
    setToastQueue(q =>
      q.map(t => t.id === id ? { ...t, isHiding: true } : t)
    )

    setTimeout(() => {
      setToastQueue(q => q.filter(t => t.id !== id))
    }, 500)
  }

  const showToast = (data: ToastData) => {
    const toast: ToastData = {
      ...data,
      id: Date.now()
    }
    setToastQueue([toast, ...toastQueue])
  }

  useEffect(() => {
    if (toastQueue.length === 0) {
      setToastData(null)
    } else {
      let lastToastData = toastQueue[toastQueue.length - 1]
      if (toastData !== lastToastData) {
        setToastData(lastToastData)
        setTimeout(() => dequeueToast(lastToastData.id!), lastToastData.timeout ?? 2000)
      }
    }
  }, [toastQueue])

  useEffect(() => {
    console.log("App started");
    const savedUser = window.localStorage.getItem("cool-uoom-user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      }
      catch (err) {
        console.error("User restore error: ", err);
      }

    }

    return () => {
      console.log("App finished");
    };
  }, []);

  const [modalData, setModalData] = useState<ModalData | null>(null);

  const showModal = (data: ModalData) => {
    setModalData(data);
  }

  const clearModal = () => {
    setModalData(null);
  }

  return (
    <AppContext.Provider value={{ showToast, showModal, user, setUser, clearModal, cart, setCart, isBusy, setBusy }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path='category/:slug' element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <div className="toaster">
        {toastQueue.map(td =>
          <div
            key={td.message}
            className={`toast-text ${td.isHiding ? "toast-hide" : ""}`}>
            {td.message}
          </div>)}
      </div>

      <Modal modalData={modalData} setModalData={setModalData} />
      {isBusy &&
        <div className='preloader'>
          <div>
            <svg className="preloader-spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200" height="200" style={{shapeRendering: "auto", display: "block", background: "transparent"}} xmlnsXlink="http://www.w3.org/1999/xlink"><g><g transform="translate(80,50)">
              <g transform="rotate(0)">
                <circle fill-opacity="1" fill="var(--main-color)" r="6" cy="0" cx="0">
                  <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="-0.875s" type="scale" attributeName="transform"></animateTransform>
                  <animate begin="-0.875s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fill-opacity"></animate>
                </circle>
              </g>
            </g><g transform="translate(71.21320343559643,71.21320343559643)">
                <g transform="rotate(45)">
                  <circle fill-opacity="0.875" fill="var(--main-color)" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="-0.75s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="-0.75s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fill-opacity"></animate>
                  </circle>
                </g>
              </g><g transform="translate(50,80)">
                <g transform="rotate(90)">
                  <circle fill-opacity="0.75" fill="var(--main-color)" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="-0.625s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="-0.625s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fill-opacity"></animate>
                  </circle>
                </g>
              </g><g transform="translate(28.786796564403577,71.21320343559643)">
                <g transform="rotate(135)">
                  <circle fill-opacity="0.625" fill="var(--main-color)" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="-0.5s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="-0.5s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fill-opacity"></animate>
                  </circle>
                </g>
              </g><g transform="translate(20,50.00000000000001)">
                <g transform="rotate(180)">
                  <circle fill-opacity="0.5" fill="var(--main-color)" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="-0.375s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="-0.375s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fill-opacity"></animate>
                  </circle>
                </g>
              </g><g transform="translate(28.78679656440357,28.786796564403577)">
                <g transform="rotate(225)">
                  <circle fill-opacity="0.375" fill="var(--main-color)" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="-0.25s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="-0.25s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fill-opacity"></animate>
                  </circle>
                </g>
              </g><g transform="translate(49.99999999999999,20)">
                <g transform="rotate(270)">
                  <circle fill-opacity="0.25" fill="var(--main-color)" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="-0.125s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="-0.125s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fill-opacity"></animate>
                  </circle>
                </g>
              </g><g transform="translate(71.21320343559643,28.78679656440357)">
                <g transform="rotate(315)">
                  <circle fill-opacity="0.125" fill="var(--main-color)" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="0s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="0s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fill-opacity"></animate>
                  </circle>
                </g>
              </g><g></g></g></svg>

          </div>
        </div>}
    </AppContext.Provider>
  )
}

export default App
function setUser(arg0: any) {
  throw new Error("Function not implemented.")
}

