export default class NumericConverter {

    isNumeric(number) {
        return !isNaN(number);
    }

    convertToNumber(string) {
        return Number(string);
    }
}