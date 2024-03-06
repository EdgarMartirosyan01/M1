class LocalizationException extends Error {
    constructor(message = undefined) {
        super(message);
        this.name = 'LocalizationException';
    }
}

const ERR_LOCALIZATION = {
    UNSUPPORTED_LOCALE: 'Locale is Not supported',
}
export {
    LocalizationException,
    ERR_LOCALIZATION
};