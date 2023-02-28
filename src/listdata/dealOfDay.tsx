interface deal {
    title: string;
    img: string;
    descrp: string;
    oldpr: string;
    price: string;
    sold: string;
    available: string;
    remaining: {
        day: number;
        hours: number;
        min: number;
        sec: number;
    };
}



export const dealOfDay: deal[] = [
    {
        title: 'shampoo, conditioner & facewash packs',
        img: '/images/products/shampoo.jpg',
        descrp: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum',
        oldpr: '$200.00',
        price: '$150.00',
        sold: '20',
        available: '40',
        remaining: {
            day: 365,
            hours: 20,
            min: 30,
            sec: 20,
        }
    },
    {
        title: 'Rose Gold diamonds Earring',
        img: '/images/products/jewellery-1.jpg',
        descrp: 'dolor dolor sit amet consectetur Lorem ipsum dolor',
        oldpr: '$2000.00',
        price: '$1990.00',
        sold: '15',
        available: '40',
        remaining: {
            day: 365,
            hours: 20,
            min: 30,
            sec: 20,
        }
    },
]
