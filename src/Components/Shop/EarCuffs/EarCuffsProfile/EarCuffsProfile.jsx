import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GoodsProfile from '../../../GoodsProfile/GoodsProfile';

const EarCuffsProfile = () => {

    let params = useParams();
    const earCuffsList = useSelector(state => state.earCuffs.goodsArray)
    const earCuffItem = earCuffsList.find((item) => item.product.id === params.earCuffID);

    return <GoodsProfile product={earCuffItem.product} />
}

export default EarCuffsProfile;