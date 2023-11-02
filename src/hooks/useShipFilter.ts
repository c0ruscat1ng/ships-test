import { useEffect, useState } from 'react';
import {IShip} from "../types.ts";

interface ShipFilterParams {
    data: { vehicles: IShip[] } | null;
    searchNationValue: string;
    searchLevelValue: number;
    searchClassValue: string;
}

interface ShipFilterResult {
    filteredShips: IShip[];
    message: boolean;
}

export const useShipFilter = ({data, searchNationValue, searchLevelValue, searchClassValue}: ShipFilterParams): ShipFilterResult => {
    const [filteredShips, setFilteredShips] = useState<IShip[]>([]);
    const [message, setMessage] = useState<boolean>(true);

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

    return { filteredShips, message };
};