import GoodsItem from "./GoodsItem/GoodsItem";

const GoodsList = (props) => {

    return (
        <div>
            {props.list.map(item=><GoodsItem item={item}/> )}  
        </div>
    )
}

export default GoodsList;