import { useDispatch } from 'react-redux';
import Listcontainer from './Listcontainer/Listcontainer';
import './App.css';
import Modal from './components/Modal/Modal';
import { openModal } from './redux/slice/ModalSlice';
import { Routes, Route, NavLink, Link } from "react-router";
import Acceuil from './pages/Acceuil/Acceuil';
import Services from './pages/Service/Services';

function App() {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <>
    <div id="nav" className=''>
      <div className='logo'>REACT</div>
      <div className='container_nav flex-nav'>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >Accueil</NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >Services</NavLink>
        <NavLink
        to="/taches"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >Tâches</NavLink>

      </div>
    </div>
      <div className='flex-inline'>
        <h1>Application To-do</h1>
        {/* <button onClick={handleOpenModal} className='btn-rouge'>
          Open Modal
        </button> */}
      </div>
      <Routes>
          <Route path='/' element={<Acceuil/>}/>
          <Route  path='/services' element={<Services/>}/>
          <Route path="/taches" element={<Listcontainer />} />
      </Routes>
      
      <Modal />
    </>
  );
}

export default App;
