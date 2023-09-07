import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GoodsProfile from '../../../GoodsProfile/GoodsProfile';

const HandBraceletProfile = () => {

    let params = useParams();
    const handBraceletsList = useSelector(state => state.handBracelets.goodsArray)
    const handBraceletItem = handBraceletsList.find((item) => item.product.id === params.handBraceletID);

    return <GoodsProfile product={handBraceletItem.product} />
}

export default HandBraceletProfile;