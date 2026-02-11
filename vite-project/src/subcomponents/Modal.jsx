import { X } from "lucide-react";

function Modal({setModalShow}) {
  return(
    <div className="bg-[rgba(5,5,5,0.46)] w-full h-screen flex justify-center items-center fixed top-0 left-0">
      <div className="w-75 h-95 p-1 bg-white rounded-2xl">
        <X onClick={(()=> setModalShow(false))} className="border rounded-full bg-black text-white p-1 hover:text-red-600 transition float-end"/>
      </div>
    </div>
  )
}

export default Modal;