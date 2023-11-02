import React, {FC, useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import api, {SHIP_LIST_QUERY} from '../../utils/api.ts';
import {IShip} from "../../types.ts";
import './ShipsList.scss'
import Ship from "../Ship/Ship.tsx";
import {classes, levels, nations} from "../../utils/data.ts";

//Поиск всех наций тест
// const nationTitlesSet = new Set<string>();
// filteredShips.forEach((ship) => {
//     nationTitlesSet.add(ship.type.title);
// });
// const uniqueNationTitles = Array.from(nationTitlesSet);
// console.log(uniqueNationTitles);

const ShipsList: FC = () => {
    const [searchNationValue, setNationSearchValue] = useState<string>('');
    const [searchLevelValue, setLevelSearchValue] = useState<number>(0);
    const [searchClassValue, setClassSearchValue] = useState<string>('');
    const [message, setMessage] = useState<boolean>(true);
    const {loading, error, data} = useQuery(SHIP_LIST_QUERY, {client: api});
    const [filteredShips, setFilteredShips] = useState<IShip[]>([]);

    useEffect(() => {
        if (data && data.vehicles) {
            let filteredArray = data.vehicles;
            setMessage(true);
            if (searchNationValue) {
                filteredArray = filteredArray.filter((ship: IShip) => ship.nation.title === searchNationValue);
            }
            if (searchLevelValue) {
                filteredArray = filteredArray.filter((ship: IShip) => ship.level === searchLevelValue);
            }
            if (searchClassValue) {
                filteredArray = filteredArray.filter((ship: IShip) => ship.type.title === searchClassValue);
            }
            setFilteredShips(filteredArray);
            if (filteredArray.length === 0) setMessage(false);
        }
    }, [data, searchNationValue, searchLevelValue, searchClassValue]);

    if (loading) return <h1 className='loading'>Loading...</h1>;
    if (error) return <h1 className='loading'>Error: {error.message}</h1>;
    return (
        <>
            <div className="filter__container">
                <select
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setNationSearchValue(e.target.value)
                    }
                >
                    {
                        nations.map((option) =>
                            <option key={option.value} value={option.value}>
                                {option.title}
                            </option>)
                    }
                </select>
                <select
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setLevelSearchValue(parseInt(e.target.value, 10))
                    }
                >
                    {levels.map((option, index: number) => (
                        <option key={index} value={option.value}>
                            {option.title}
                        </option>
                    ))}
                </select>
                <select
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setClassSearchValue(e.target.value)
                    }
                >
                    {
                        classes.map((option, index: number) =>
                            <option key={index} value={option.value}>
                                {option.title}
                            </option>)
                    }
                </select>
            </div>
            <div className="ships__list">
                {!message ? (
                    <p className="ship_notfound">Корабли с такими характеристиками не найдены, выберите другой уровень
                        или категорию.</p>
                ) : (
                    <div className="ships__list">
                        {filteredShips.map((ship: IShip, index: number) => (
                                <Ship ship={ship} key={index}/>
                            )
                        )}
                    </div>
                )}
            </div>
        </>
    );
};
export default ShipsList;