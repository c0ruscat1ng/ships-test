export interface IShip {
    description: string;
    icons: {
        large: string;
        medium: string;
    };
    level: number;
    nation: {
        color: string;
        icons: {
            large: string;
            medium: string;
            small: string;
        };
        name: string;
        title: string;
    };
    title: string;
    type: {
        icons: {
            default: string;
        };
        name: string;
        title: string;
    };
}