
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
import LegBracelets from './Components/Shop/LegBracelets/LegBracelets';
import HandBracelets from './Components/Shop/HandBracelets/HandBracelets';
import HandBraceletProfile from './Components/Shop/HandBracelets/HandBraceletProfile/HandBraceletProfile';
import Rings from './Components/Shop/Rings/Rings';
import RingProfile from './Components/Shop/Rings/RingsProfile/RingProfile';
import Bijouterie from './Components/Shop/Bijouterie/Bijouterie';
import BijouterieProfile from './Components/Shop/Bijouterie/BijouteriePofile/BijouterieProfile';
import EarCuffsProfile from './Components/Shop/EarCuffs/EarCuffsProfile/EarCuffsProfile';



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
          <Route path='/earCuffs/:earCuffID' element={<EarCuffsProfile/>} />
          <Route path='/handBracelets/:handBraceletID' element={<HandBraceletProfile/>} />
          <Route path='/handBracelets' element={<HandBracelets />} />
          <Route path='/legBracelets/:legBraceletID' element={<ChainProfile/>} />
          <Route path='/legBracelets' element={<LegBracelets />} />
          <Route path='/rings' element={<Rings />} />
          <Route path='/rings/:ringID' element={<RingProfile/>} />
          <Route path='/bijouterie' element={<Bijouterie/>} />
          <Route path='/bijouterie/:bijouterieID' element={<BijouterieProfile/>} />

        </Routes>

      </div>
        <Footer />  
    </div>
  );
}

export default App;
