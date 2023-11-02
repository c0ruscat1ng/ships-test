import {FC} from "react";
import {IShip} from "../../types.ts";
import './Ship.scss'
import {useInView} from "react-intersection-observer";


interface IProps {
    ship: IShip;
}

const Ship: FC<IProps> = ({ship}) => {
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return (
        <div ref={ref} className="ship__container">
            <p className="ship__title">Название: {ship.title}</p>
            <p className="ship__class">Класс: {ship.type.title}</p>
            <p className="ship__nation-text">Нация: {ship.nation.title}</p>
            <img className="ship__nation-img" src={ship.nation.icons.large} alt="large icon"/>
            <p className="ship__level">Уровень: {ship.level}</p>
            <p className="ship__desc">{ship.description}</p>
            {
                inView ? <img className="ship__img" src={ship.icons.large} alt="ship photo"/>
                        :
                        <div className="ship__skeleton"></div>
            }
            {/*<img className="ship__img" src={ship.icons.large} alt="ship photo"/>*/}
            {/*<div className="ship__skeleton"></div>*/}
        </div>
    );
};

export default Ship;