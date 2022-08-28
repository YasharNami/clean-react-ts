export function ToFa(value: any) {
    const persionDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return value.toString().replace(/\d/g, (x: any) => persionDigits[Number(x)]);
}

export function ToEn(value: any) {
    let str = value.replace(',', '');
    const persionDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    for (var i = 0; i < 10; i++) {
        str = str.replaceAll(persionDigits[i], i);
    }
    return str;
}
export function faNumToEnNum(value: any): any {
    let str = value.replace(',', '');
    const persionDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    for (var i = 0; i < 10; i++) {
        str = str.replaceAll(persionDigits[i], i);
    }
    return str;
}

export function ToIranCurrency(num: any) {
    var str = num.toString().split('.');
    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 4) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}
export function IsNumeric(num: any) {
    if (num == '.' || num == '' ||
        num == '0' || num == '1' ||
        num == '2' || num == '3' ||
        num == '4' || num == '5' ||
        num == '6' || num == '7' ||
        num == '8' || num == '9') {
        return true;
    }
    else return false;
}
