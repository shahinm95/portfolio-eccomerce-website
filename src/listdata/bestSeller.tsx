interface BestSell {
    title: string;
    img: string;
    oldpr: string;
    price: string;
    rating: string;
}

export const bestSeller: BestSell[] = [
    {
        title: 'Baby Fabric Shoes',
        img: '/images/products/1.jpg',
        oldpr: '$5.00',
        price: '$4.00',
        rating: '4.1',
    },
    {
        title: "Men's Hoodies T-shirt",
        img: '/images/products/2.jpg',
        oldpr: '$17.00',
        price: '$7.00',
        rating: '3.8',
    },
    {
        title: 'Girls T-shirt',
        img: '/images/products/3.jpg',
        oldpr: '$5.00',
        price: '$3.00',
        rating: '4.5',
    },
    {
        title: 'Woolen Hat For Men',
        img: '/images/products/4.jpg',
        oldpr: '$18.00',
        price: '$12.00',
        rating: '4.8',
    },
]