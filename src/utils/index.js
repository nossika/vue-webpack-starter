export const getFormdata = (data, toObj) => { // 转化成formdata
    let ret;
    if (toObj) {
        ret = {};
    } else {
        if (typeof FormData === 'undefined') return {};
        ret = new FormData();
    }

    for (let key in data) {
        let value = data[key];
        if (value === undefined || value === null) continue;
        function travel (value, path) { // 如果为数组或者对象继续递归，到简单值为止，再把最终path和value添加进form
            if (value instanceof Array) {
                value.forEach((v, i) => {
                    travel(v, `${path}[${i}]`);
                });
            } else if (value instanceof Object) {
                for (let prop in value) {
                    travel(value[prop], `${path}.${prop}`);
                }
            } else {
                if (value === undefined || value === null) return;
                if (toObj) {
                    ret[path] = value;
                } else {
                    ret.append(path, value);
                }
            }
        }
        travel(value, key);
    }
    return ret;
};

export function formatDate (date) { // 标准化时间格式
    if (!date) return '';
    date = new Date(date);
    function fillZero (num) {
        num = +num;
        return num <= 9 ? '0' + num : '' + num;
    }
    let [Y, M ,D] = [
        date.getFullYear(),
        fillZero(date.getMonth() + 1),
        fillZero(date.getDate())
    ];

    let [h, m ,s] = [
        fillZero(date.getHours()),
        fillZero(date.getMinutes()),
        fillZero(date.getSeconds())
    ];
    return `${Y}-${M}-${D} ${h}:${m}:${s}`;
}