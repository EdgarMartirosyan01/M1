export const ROUTES = {
    HOME: {key: 'home', route: '/'},
    SERVICES: {key: 'services', route: '/services'},
    CONTACTS: {key: 'contacts', route: '/contacts'},
    ABOUT: {key: 'about', route: '/about'},
    BLOCKS: {key: 'blocks', route: '/blocks'},
    PRODUCTS: {key: 'products', route: '/products'},
    PORTFOLIO: {key: 'portfolio', route: '/portfolio'},
    DELIVERY: {key: 'delivery', route: '/delivery'},
}

export const SUPPORTED_LOCALES = {
    en: {
        key: 'en',
        shortKey:'EN',
        title: 'English',
        flag: require('@/assets/icons/American-flag.png')
    },
    ru: {
        key: 'ru',
        shortKey: 'RU',
        title: 'Русский',
        flag: require('@/assets/icons/Russian-flag.png')
    },
    am: {
        key: 'am',
        shortKey: 'AM',
        title: 'Հայերեն',
        flag: require('@/assets/icons/Armenian-flag.webp')
    }
};

export const DEFAULT_LANGUAGE = 'ru'

export const PRODUCT_DATA = [
    {
        id: 1,
        title: "Стеновые Блоки",
        count: 0,
        images: [
            require('@/assets/images/products/Product1.jpg'),
            require('@/assets/images/products/Product2.jpg'),
            require('@/assets/images/products/Product4.jpg'),
            require('@/assets/images/products/Product6.jpg'),
        ]
    },
    {
        id: 2,
        title: "Фасадные Блоки",
        count: 0,
        images: [
            require('@/assets/images/products/BlockHomeV.jpg'),
            require('@/assets/images/products/PolyBlock2.jpg'),
        ]
    },
    {
        id: 3,
        title: "Теплоизоляционные Плитки",
        count: 0,
        images: [
            require('@/assets/images/products/TermoBlockWall.jpg'),
            require('@/assets/images/products/TermoBlockWall2.jpg'),
        ]
    },
    {
        id: 4,
        title: "Заборы из Полистиролбетона",
        count: 0,
        images: [
            require('@/assets/images/products/PolyBlock4.jpg'),
            require('@/assets/images/products/PolyBlock5.jpg'),
        ]
    },
    {
        id: 5,
        title: "Армированные перемычки",
        count: 0,
        images: [
            require('@/assets/images/products/ArmorBlock.jpg'),
        ]
    },
    {
        id: 6,
        title: "Вибропрессованные блоки",
        count: 0,
        images: [require('@/assets/images/products/PolyBlock3.jpg'),]
    },
    {
        id: 7,
        title: "сухие строительные смеси",
        count: 0,
        images: [require('@/assets/images/products/ProductGroup.jpg'),]
    },
]