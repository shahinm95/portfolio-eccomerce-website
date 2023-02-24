interface NavItem {
    label: string;
    subLabel?: string | string[];
    children?: Array<NavItem>;
    href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'New Arrivals',
        children: [
            {
                label: 'All New',
                subLabel: ['New Dresses', 'New Bottoms', 'New Shoes'],
                href: '#',
            },
            {
                label: 'DU Exclusive',
                subLabel: ['Game Day', 'Holiday', 'Black Friday'],
                href: '#',
            },
            {
                label: 'Shop by Collection',
                subLabel: ['Spring', 'Winter', 'Automn', 'Summer'],
                href: '#',
            },
        ],
    },
    {
        label: 'DU Exclusive',
        children: [
            {
                label: 'Game Day',
                subLabel: ['USA', 'Germany', 'Canada'],
                href: '#',
            },
            {
                label: 'Black Friday',
                subLabel: ['Arizona', 'New York', 'Texas'],
                href: '#',
            },
        ],
    },
    {
        label: 'Clothing',
        href: '#',
    },
    {
        label: 'Dresses',
        href: '#',
    },
    {
        label: 'Shoes',
        href: '#',
    },
    {
        label: 'Accessories',
        href: '#',
    },
    {
        label: 'Sale',
        href: '#',
    },
];

