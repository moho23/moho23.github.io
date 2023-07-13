export function convertEntoFa(value: string) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return value?.toString().replace(/\d/g, (x) => persianDigits[Number(x)]);
}

export function convertFatoEn(value: any) {
    const p2e = value.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
    return p2e
}

export function numbersSeparator(num: any, sep: undefined | string) {
    const number = typeof num === 'number' ? num.toString() : num,
        separator = typeof sep === 'undefined' ? ',' : sep;
    return number?.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + separator);
}

export function fixNumbers(str) {
    const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g,];
    const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g,];
    if (typeof str === "string") {
        for (let i = 0; i < 10; i++) {
            str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
    }
    return str;
}