

export const __REGEX = {
    phoneNumber: /^(?!^[123456789])(?:.*[ ])?\d{11}$/gm,
    iBan: /^(?=.{24}$)[0-9]*$/g,
    emailAddress: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
    persianChar: /(?!.*[۱۲۳۴۵۶۷۸۹۰])(?!.*\w)(?!.*[^\W])(?!.*[\d])(?!.*[~!@#$%^&*()_+<>:"';{}])[\u0600-\u06FF\s]/g,
    cardNumber: /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g,
    strongPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
};


