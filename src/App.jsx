import { useDispatch } from 'react-redux';
import Listcontainer from './Listcontainer/Listcontainer';
import './App.css';
import Modal from './components/Modal/Modal';
import { openModal } from './redux/slice/ModalSlice';
import { Routes, Route } from "react-router";

function App() {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <>
      <div className='flex-inline'>
        <h1>Application To-do</h1>
        {/* <button onClick={handleOpenModal} className='btn-rouge'>
          Open Modal
        </button> */}
      </div>
      <Routes>
          <Route path="/taches" element={<Listcontainer />} />
      </Routes>
      
      <Modal />
    </>
  );
}

export default App;
