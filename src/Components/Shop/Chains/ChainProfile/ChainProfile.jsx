import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GoodsProfile from '../../../GoodsProfile/GoodsProfile';

const ChainProfile = () => {

    let params = useParams();
    const chainsList = useSelector(state => state.chains.goodsArray)
    const chainItem = chainsList.find((item) => item.product.id === params.chainID);
   
    return <GoodsProfile product={chainItem.product}/>
}

export default ChainProfile;