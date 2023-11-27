import {createI18n} from "vue-i18n";
import {ru} from "@/core/plugins/translations/ru";

const messages = {
    ru: ru,
};

const i18n = createI18n({
    legacy: false,
    locale: "ru",
    globalInjection: true,
    messages,
});

export default i18n;
