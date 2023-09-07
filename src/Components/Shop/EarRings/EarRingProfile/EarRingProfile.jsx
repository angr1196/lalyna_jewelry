import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GoodsProfile from '../../../GoodsProfile/GoodsProfile';

const EarRingProfile = () => {

    let params = useParams();
    const earRingsList = useSelector(state => state.earRings.goodsArray)
    const earRingItem = earRingsList.find((item) => item.product.id === params.earRingID);

    return <GoodsProfile product={earRingItem.product} />
}

export default EarRingProfile;