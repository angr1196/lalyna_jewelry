
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
// import Navbar from './Components/Navbar/Navbar';
import Contacts from './Pages/Contacts/Contacts';

import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import CareRules from './Pages/CareRules/CareRules';
import Chains from './Components/Shop/Chains/Chains';
import EarRings from './Components/Shop/EarRings/EarRings';
import EarRingProfile from './Components/Shop/EarRings/EarRingProfile/EarRingProfile';
import ChainProfile from './Components/Shop/Chains/ChainProfile/ChainProfile';
import EarCuffs from './Components/Shop/EarCuffs/EarCuffs';



function App(props) {

  // const [isOpen, setIsOpen] = useState(false);

  // const onOpenHandler = () => {
  //   setIsOpen(true);
  // }

  // const onCloseHandler = () => {
  //   setIsOpen(false);
  // }


  return (
    <div class="app-wrapper">
      <Header/>
      {/* {isOpen && <Navbar onClose={onCloseHandler} />}
      <Navbar /> */}
      <div class="content-wrapper">
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/shop' element={<Goods />} /> */}
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/care' element={<CareRules />} />
          <Route path='/chains' element={<Chains />} />
          <Route path='/earRings/:earRingID' element={<EarRingProfile />} />
          <Route path='/earRings' element={<EarRings />} />
          <Route path='/chains/:chainID' element={<ChainProfile/>} />
          <Route path='/earCuffs' element={<EarCuffs />} />
        </Routes>

      </div>
        <Footer />  
    </div>
  );
}

export default App;
