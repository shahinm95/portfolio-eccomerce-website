interface Sub {
    title: string;
    number: string;
}
interface CatType {
    head: string;
    sub: Sub[];
}

export const category: CatType[] = [
    {
        head: 'Clothes',
        sub: [
            {
                title: 'Shirt',
                number: '300',
            },
            {
                title: 'Shorts & Jeans',
                number: '60',
            },
            {
                title: 'Jacket',
                number: '50',
            },
            {
                title: 'Dress & Frock',
                number: '87',
            },
        ],
    },
    {
        head: 'Footwear',
        sub: [
            {
                title: 'Sports',
                number: '47',
            },
            {
                title: 'Formal',
                number: '38',
            },
            {
                title: 'Casual',
                number: '54',
            },
            {
                title: 'Safety Shoes',
                number: '26',
            },
        ],
    },
    {
        head: 'Jewelry',
        sub: [
            {
                title: 'Earrnings',
                number: '65',
            },
            {
                title: 'Couple Rings',
                number: '78',
            },
            {
                title: 'Necklace',
                number: '45',
            },
        ],
    },
    {
        head: 'Perfume',
        sub: [
            {
                title: 'Clothes Perfume',
                number: '23',
            },
            {
                title: 'Deodorant',
                number: '154',
            },
            {
                title: 'Jacket',
                number: '110',
            },
            {
                title: 'Dress & Frock',
                number: '45',
            },
        ],
    },
    {
        head: 'Cosmetics',
        sub: [
            {
                title: 'Shampoo',
                number: '23',
            },
            {
                title: 'Sunscreen',
                number: '54',
            },
            {
                title: 'Body Wash',
                number: '62',
            },
            {
                title: 'Makeup Kit',
                number: '91',
            },
        ],
    },
    {
        head: 'Glasses',
        sub: [
            {
                title: 'Sunglasses',
                number: '45',
            },
            {
                title: 'Lenses',
                number: '78',
            },
        ],
    },
    {
        head: 'Bags',
        sub: [
            {
                title: 'Shopping Bag',
                number: '72 ',
            },
            {
                title: 'Gym Bagpack',
                number: '64',
            },
            {
                title: 'Purse',
                number: '75',
            },
            {
                title: 'Wallet',
                number: '18',
            },
        ],
    },
]