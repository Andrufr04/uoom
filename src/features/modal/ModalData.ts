import type { ReactNode } from "react";

export default interface ModalData {
    isCancellable?: boolean,
    content: ReactNode
};