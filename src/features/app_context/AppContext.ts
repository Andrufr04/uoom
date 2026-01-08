import { createContext } from "react"
import type ToastData from "../toast/ToastData"
import type ModalData from "../modal/ModalData"
import type { UserType } from "../../entities/user/model/UserType"
import type CartType from "../../entities/cart/model/CartType"


type AppContextType = {
    user: UserType|null,
    setUser: (input: UserType|null) => void,
    showToast: (data:ToastData) => void,
    showModal: (data:ModalData) => void,
    clearModal: () => void,
    cart: CartType,
    setCart: (input: CartType) => void,
    setBusy: (isBusy:boolean) => void,
    isBusy:boolean
}

const init:AppContextType = {
    user:null,
    setUser: (_) => {
        throw "Not Implemented 'setUser'";
    },
    showToast: (_) => {
        throw "Not Implemented 'showToast'"
    },
    showModal: (_) => {
        throw "Not Implemented 'showModal'";
    },
    clearModal: () => {
        throw "Not Implemented 'clearModal'";
    },
    cart: {items:[], price: 0},
    setCart: (_) => {
        throw "Not Implemented 'setCart'";
    },
    isBusy: false,
    setBusy: (_) => {
        throw "Not Implemented 'setBusy'";
    }
}

const AppContext = createContext<AppContextType>(init)

export { AppContext }
