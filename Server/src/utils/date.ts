export const DataFormat = () => {
  const date = new Date();

  // 获取当前的年，月，日，时，分和秒
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 注意月份是从0开始的，所以要加1
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  // 拼接成"yyyyMMddhhmmss"格式
  const dateTimeString =
    year +
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
