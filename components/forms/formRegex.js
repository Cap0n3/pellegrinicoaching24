// Add your regex here

export const FORM_REGEX = {
    nameRgx: /^[^\d|\\[\]{}<>#$"£°()@§%!;:*+/=?_|~]+$/i, // negative character class
    emailRgx:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phoneRgx:
        /^(?:\+\d{1,3}|0\d{1,3}|00\d{1,2})?\s?(?:\(\d+\)\s?)?(?:[-\/\s.]|\d)+$/,
    chFrPhoneRgx:
        /^(\+(41|33)|00\s?(41|33)|0\d{1,2})(\s?\(0\))?(\s)?(\d{1,2})(\s)?(\d{2,3})(\s)?(\d{2})(\s)?(\d{2})(\s)?(\d{2})?$/,
    messageRgx: /^[^|\\[\]{}<>]+$/i, // negative character class
};
