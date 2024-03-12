import {DEFAULT_LANGUAGE, SUPPORTED_LOCALES} from "@/core/utils/Constants";
import {ERR_LOCALIZATION} from "@/core/plugins/LocalizationExeption";
import {LocalizationException} from "@/core/plugins/LocalizationExeption";

export class LocalizationService {
    static storageKey = 'vn_locale';
    static provider = null;
    static supportedLocales = SUPPORTED_LOCALES;
    static isEnabled = false;

    static init(provider) {
        // if (5 === 4) {
        //     this.removeSavedLocale();
        //     return;
        // }

        this.isEnabled = true;
        this.provider = provider;
        const savedLocale = this.getSavedLocale();


        let locale = null;
        if (savedLocale) {
            locale = savedLocale;
        } else if (navigator && navigator.language) {
            locale = navigator.language.split('-')[0];
        }

        locale = LocalizationService.isLocaleSupported(locale) ? locale : DEFAULT_LANGUAGE;
        this.setLocale(locale);
        this.storeLocale(locale);
    }

    static storeLocale(locale) {
        localStorage.setItem(this.storageKey, locale);
    }

    static getSavedLocale() {
        return localStorage.getItem(this.storageKey);
    }

    static removeSavedLocale() {
        localStorage.removeItem(this.storageKey)
    }

    static getLocale() {
        return this.provider.global.locale.value;
    }

    static setLocale(locale) {
        let loc = this.supportedLocales[locale];
        if (loc) {
            this.provider.global.locale.value = locale;
            this.storeLocale(locale);
        } else {
            throw new LocalizationException(ERR_LOCALIZATION.UNSUPPORTED_LOCALE);
        }
    }

    static translate(key) {
        return LocalizationService.isEnabled ? this.provider.global.t(key) : key;
    }

    static isLocaleSupported(locale) {
        return !!this.supportedLocales[locale];
    }
}