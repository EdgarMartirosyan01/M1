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
        shortKet: 'AM',
        title: 'Հայերեն',
        flag: require('@/assets/icons/Armenian-flag.webp')
    }
};

export const DEFAULT_LANGUAGE = 'ru'