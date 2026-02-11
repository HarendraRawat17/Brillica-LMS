
import './index.css'
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';
import { useState } from 'react';
import Modal from './subcomponents/Modal';


function App() {

  const [navShow, setNavShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='flex gap-2 w-full'>
      <Sidebar navShow ={navShow} setNavShow={setNavShow} modalShow = {modalShow} setModalShow= {setModalShow} />
      <main className='w-full pr-3 h-screen'>
        <Header navShow ={navShow} setNavShow={setNavShow}/>
        <Content/>
      </main>

      {modalShow && <Modal setModalShow={setModalShow}/>}
    </div>
  )


}

export default App
