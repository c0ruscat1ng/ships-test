interface INations {
    value: string;
    title: string;
}
interface ILevels{
    value: number;
    title: number|string;
}
interface IClasses{
    value: string;
    title: string;
}

export const classes: IClasses[] = [
    {
        value:'',
        title:'Все классы'
    },
    {
        value:'Submarine',
        title:'Подводная лодка'
    },
    {
        value:'Destroyer',
        title:'Эсминцы'
    },
    {
        value:'Cruiser',
        title:'Крейсеры'
    },
    {
        value:'Battleship',
        title:'Линкоры'
    },
    {
        value:'Aircraft Carrier',
        title:'Авианосцы'
    }
]

export const levels: ILevels[] = [
    {
        value:0,
        title:'Все уровни'
    },
    {
        value:1,
        title:1
    },
    {
        value:2,
        title:2
    },
    {
        value:3,
        title:3
    },
    {
        value:4,
        title:4
    },
    {
        value:5,
        title:5
    },
    {
        value:6,
        title:6
    },
    {
        value:7,
        title:7
    },
    {
        value:8,
        title:8
    },
    {
        value:9,
        title:9
    },
    {
        value:10,
        title:10
    },
    {
        value:11,
        title:11
    }
]
export const nations: INations[] = [
    {
        title: 'Все нации',
        value: ''
    },
    {
        title: 'США',
        value: 'U.S.A.'
    },
    {
        title: 'Япония',
        value: 'Japan'
    },
    {
        title: 'СССР',
        value: 'U.S.S.R.'
    },
    {
        title: 'Франция',
        value: 'France'
    },
    {
        title: 'Великобритания',
        value: 'U.K.'
    },
    {
        title: 'Германия',
        value: 'Germany'
    },
    {
        title: 'Италия',
        value: 'Italy'
    },
    {
        title: 'Нидерланды',
        value: 'The Netherlands'
    },
    {
        title: 'Испания',
        value: 'Spain'
    },
    {
        title: 'Europe',
        value: 'Europe'
    },
    {
        title: 'Commonwealth',
        value: 'Commonwealth'
    },
    {
        title: 'Pan-America',
        value: 'Pan-America'
    },
    {
        title: 'Pan-Asia',
        value: 'Pan-Asia'
    }
];