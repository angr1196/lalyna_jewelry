import styles from './ChainProfile.module.css'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ImageSlider from '../../../UX/ImageSlider';
import classNames from 'classnames';

const ChainProfile = () => {

    let params = useParams();

    const chainsList = useSelector(state => state.chains.goodsArray)

    const chainItem = chainsList.find((item) => item.product.id === params.chainID);

    return (
        <div className={styles.container}>
            <div className={classNames(styles.photoBlock, styles.flexItem)}>
                <ImageSlider images={chainItem.product.images} />
            </div>

            <div className={classNames(styles.descriptionBlock, styles.flexItem)}>
                <div className={styles.topic}>
                    {chainItem.product.id} {chainItem.product.name}
                </div>

                <div className={styles.price}>
                    {chainItem.product.price} грн
                </div>

                <div className={styles.material}>
                    Матеріал:  {chainItem.product.material}
                </div>

                <div className={styles.size}>
                    Розмір: {chainItem.product.size}
                </div>

                <div className={styles.buyButton}>
                    <button>
                        Додати у кошик
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChainProfile;