import {FC} from "react";
import {IShip} from "../../types.ts";
import './Ship.scss'


interface IProps {
    ship: IShip;
}

const Ship: FC<IProps> = ({ship}) => {
    return (
        <div className="ship__container">
            <p className="ship__title">Название: {ship.title}</p>
            <p className="ship__class">Класс: {ship.type.title}</p>
            <p className="ship__nation-text">Нация: {ship.nation.title}</p>
            <img className="ship__nation-img" src={ship.nation.icons.large} alt="large icon"/>
            <p className="ship__level">Уровень: {ship.level}</p>
            <p className="ship__desc">Описание: {ship.description}</p>
            <img className="ship__img" src={ship.icons.large} alt=""/>
        </div>
    );
};

export default Ship;