module.exports = function toReadable(number) {

    const units = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    const other = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    const tens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    const str = String(number);

    if (number === 0) {
        return "zero";
    } else if (str.length === 1) {
        return units[number - 1];
    } else if (str.length === 2 && str[1] === "0") {
        return tens[str[0] - 1];
    } else if (str.length === 2 && str[1] !== "0" && number <= 19) {
        return other[str[1] - 1];
    } else if (str.length === 2 && str[1] !== "0" && number > 19) {
        return tens[str[0] - 1] + " " + units[str[1] - 1];
    } else if (str.length === 3 && str[1] === "0" && str[2] === "0") {
        return units[str[0] - 1] + " hundred";
    } else if (str.length === 3 && str[1] !== "0" && str[2] === "0") {
        return units[str[0] - 1] + " hundred " + tens[str[1] - 1];
    } else if (str.length === 3 && str[1] === "0" && str[2] !== "0") {
        return units[str[0] - 1] + " hundred " + units[str[2] - 1];
    } else if (str.length === 3 && str[1] !== "0" && str[2] !== "0" && +str.slice(1) <= 19) {
        return units[str[0] - 1] + " hundred " + other[str[2] - 1];
    } else if (str.length === 3 && str[1] !== "0" && str[2] !== "0" && +str.slice(1) > 19) {
        return units[str[0] - 1] + " hundred " + tens[str[1] - 1] + " " + units[str[2] - 1];
    };
};

