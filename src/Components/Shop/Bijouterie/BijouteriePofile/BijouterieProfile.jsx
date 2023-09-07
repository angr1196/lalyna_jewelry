import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GoodsProfile from '../../../GoodsProfile/GoodsProfile';


const BijouterieProfile = () => {

    let params = useParams();
    const bijouterieList = useSelector(state => state.bijouterie.goodsArray) 
    const bijouterieItem = bijouterieList.find((item) => item.product.id === params.bijouterieID);
  
    return  <GoodsProfile product={bijouterieItem.product}/>
}

export default BijouterieProfile;