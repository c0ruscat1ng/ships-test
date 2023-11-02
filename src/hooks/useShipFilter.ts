import {useState} from 'react';
import {IShip} from './../types.ts';

function useShipFilter() {
    const [searchNationValue, setNationSearchValue] = useState<string>('');
    const [searchLevelValue, setLevelSearchValue] = useState<number>(0);
    const [searchClassValue, setClassSearchValue] = useState<string>('');
    const [message, setMessage] = useState<boolean>(true);

    const filterShips = (vehicles: IShip[]) => {
        let filteredArray = vehicles;

        if (searchNationValue) {
            filteredArray = filteredArray.filter((ship: IShip) => ship.nation.title === searchNationValue);
        }

        if (searchLevelValue) {
            filteredArray = filteredArray.filter((ship: IShip) => ship.level === searchLevelValue);
        }

        if (searchClassValue) {
            filteredArray = filteredArray.filter((ship: IShip) => ship.type.title === searchClassValue);
        }

        setMessage(filteredArray.length === 0);
        return filteredArray;
    };

    return {
        searchNationValue,
        setNationSearchValue,
        searchLevelValue,
        setLevelSearchValue,
        searchClassValue,
        setClassSearchValue,
        filterShips,
        message,
    };
}

export default useShipFilter;