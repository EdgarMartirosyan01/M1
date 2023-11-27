import {ROUTES} from "@/core/utils/Constants";

class MenuItem {
    constructor(title, elementId, route, icon = null, content = null, subMenu = null) {
        this.id = elementId;
        this.title = title;
        this.route = route;
        this.icon = icon;
        this.content = content;
        this.subMenu = subMenu;
    }
    // get hasChild() {
    //     return !!(this.subMenu && this.subMenu.length > 0);
    // }
}

export const MENU_ITEMS = {
    HOME: new MenuItem('О полистиролбетоне', 'home', ROUTES.HOME.route),
    SERVICES: new MenuItem('Услуги', 'services', ROUTES.SERVICES.route),
    CONTACTS: new MenuItem('Контакты', 'contacts', ROUTES.CONTACTS.route),
    ABOUT: new MenuItem('О нас', 'about', ROUTES.ABOUT.route),
    BLOCKS: new MenuItem('Blocks', 'blocks', ROUTES.BLOCKS.route),
    PRODUCTS: new MenuItem('Продукция', 'products', null, null, null),
    PORTFOLIO: new MenuItem('Портфолио', 'portfolio', ROUTES.PORTFOLIO.route),
    DELIVERY: new MenuItem('Доставка', 'delivery', ROUTES.DELIVERY.route)
}
export const LandingMenuItems = [
    MENU_ITEMS.HOME,
    MENU_ITEMS.SERVICES,
    new MenuItem(
        MENU_ITEMS.PRODUCTS.title,
        MENU_ITEMS.PRODUCTS.id,
        MENU_ITEMS.PRODUCTS.route,
        MENU_ITEMS.PRODUCTS.icon,
        MENU_ITEMS.PRODUCTS.content,
        [

        ]
    ),
    MENU_ITEMS.CONTACTS,
    MENU_ITEMS.ABOUT,
    MENU_ITEMS.PORTFOLIO,
    MENU_ITEMS.DELIVERY,
];