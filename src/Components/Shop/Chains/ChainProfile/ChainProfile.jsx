import styles from './ChainProfile.module.css'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ChainProfile = () => {

    let params = useParams();

    const chainsList = useSelector(state => state.chains.goodsList) 

    const chain = chainsList.find((item) => item.id === params.chainID);



    return (
        <div>
            <div className={styles.photoBlock}>
                <img src={chain.photo} alt="" />
            </div>

            <div className={styles.descriptionBlock}>

                <div>
                    Артикул: {chain.id}
                </div>
                <div>
                    Назва: {chain.name}
                </div>
                <div>
                    Ціна: {chain.price}
                </div>
                <div>
                    Колір: срібний
                </div>

                <div>
                    Сережки кільця
                </div>

                <div>
                    Матеріал: медична сталь
                </div>

                <div>
                    Діаметр: 4.5 см
                </div>
            </div>
        </div>
    )

}

export default ChainProfile;