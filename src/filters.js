/*
    补零函数
 */
const format = value => (value >= 10 ? `${value}` : `0${value}`);
/**
 * 时间格式化
 */
export const dateFilter = (time, type) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const second = date.getSeconds();
    let result;
    switch (type) {
        case 0: // 01-05
            result = `${format(month)}-${format(day)}`;
            break;
        case 1: // 11:12
            result = `${format(hours)}-${format(minutes)}`;
            break;
        case 2: // 2015-01-05
            result = `${year}-${format(month)}-${format(day)}`;
            break;
        case 3: // 2015-01-05 11:12
            result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}`;
            break;
        case 4:// 2015-01-05 11:12:06
            result = `${year}-${format(month)}-${format(day)}   `;
            result += `${format(hours)}:${format(minutes)}:${format(second)}`;
            break;
        default :
            result = `${year}-${format(month)}-${format(day)}`;
    }
    return result;
};
