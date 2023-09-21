
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Contacts from './Pages/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import CareRules from './Pages/CareRules/CareRules';
import Chains from './Pages/Chains/Chains';
import EarRings from './Pages/EarRings/EarRings';
import EarCuffs from './Pages/EarCuffs/EarCuffs';
import LegBracelets from './Pages/LegBracelets/LegBracelets';
import HandBracelets from './Pages/HandBracelets/HandBracelets';
import Rings from './Pages/Rings/Rings';
import Bijouterie from './Pages/Bijouterie/Bijouterie';
import GoodsProfile from './Pages/GoodsProfile/GoodsProfile';

function App() {

  return (
    <div class="app-wrapper">
      <Header />

      <div class="content-wrapper">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/care' element={<CareRules />} />
          <Route path='/chains' element={<Chains />} />
          <Route path='/chains/:goodsID' element={<GoodsProfile />} />
          <Route path='/earRings/:goodsID' element={<GoodsProfile />} />
          <Route path='/earRings' element={<EarRings />} />
          <Route path='/earCuffs' element={<EarCuffs />} />
          <Route path='/earCuffs/:goodsID' element={<GoodsProfile />} />
          <Route path='/handBracelets/:goodsID' element={<GoodsProfile />} />
          <Route path='/handBracelets' element={<HandBracelets />} />
          <Route path='/legBracelets/:goodsID' element={<GoodsProfile />} />
          <Route path='/legBracelets' element={<LegBracelets />} />
          <Route path='/rings' element={<Rings />} />
          <Route path='/rings/:goodsID' element={<GoodsProfile />} />
          <Route path='/bijouterie' element={<Bijouterie />} />
          <Route path='/bijouterie/:goodsID' element={<GoodsProfile />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
