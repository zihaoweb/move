"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFormat = void 0;
const DataFormat = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const dateTimeString = year +
        (month < 10 ? '0' : '') +
        month +
        (day < 10 ? '0' : '') +
        day +
        (hour < 10 ? '0' : '') +
        hour +
        (minute < 10 ? '0' : '') +
        minute +
        (second < 10 ? '0' : '') +
        second;
    return dateTimeString;
};
exports.DataFormat = DataFormat;
//# sourceMappingURL=date.js.map