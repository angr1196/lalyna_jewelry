import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GoodsProfile from '../../../GoodsProfile/GoodsProfile';

const RingProfile = () => {

    let params = useParams();
    const ringsList = useSelector(state => state.rings.goodsArray)
    const ringItem = ringsList.find((item) => item.product.id === params.ringID);

    return <GoodsProfile product={ringItem.product} />

}

export default RingProfile;