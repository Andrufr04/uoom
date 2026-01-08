import type ModalData from "../../../features/modal/ModalData";
import "./Modal.css";


export default function Modal({modalData, setModalData}:{modalData:ModalData|null, setModalData: React.Dispatch<React.SetStateAction<ModalData | null>>}) {

  const onCancel = () => {
    if(modalData?.isCancellable) {
      setModalData(null);
    }
  };

  return modalData == null
  ? <></>
  : <div className='app-modal' onClick={onCancel}>
      <div className='app-modal-dlg' onClick={e => e.stopPropagation()}>
        <div className="app-modal-close" onClick={onCancel} role="button"><i className="bi bi-x"></i></div>
        <div className='app-modal-main'>
          {modalData.content}
        </div>          
      </div>
    </div>
}