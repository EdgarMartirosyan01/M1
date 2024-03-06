import {createI18n} from "vue-i18n";
import {ru} from "@/core/plugins/translations/ru";
import {en} from "@/core/plugins/translations/en";
import {am} from "@/core/plugins/translations/am";
import {DEFAULT_LANGUAGE} from "@/core/utils/Constants";

const messages = {
    ru: ru,
    en: en,
    am: am,
};

const i18n = createI18n({
    legacy: false,
    locale: DEFAULT_LANGUAGE,
    fallbackLocale: DEFAULT_LANGUAGE,
    globalInjection: true,
    messages,
});

export default i18n;
