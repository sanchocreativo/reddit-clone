export const scrolly = (action, event) => {
    let element = event.target;
    if (element.scrollHeight - Math.ceil(element.scrollTop) === element.clientHeight) {
        action();
        console.log(true);
    }else {
        console.log(false);
    }
};



export const makeQuery = filters => {
    if (!filters) return '';
    return Object.keys(filters)
        .reduce(function (a, k) {
            a.push(k + '=' + encodeURIComponent(filters[k].toString().trim()));
            return a;
        }, [])
        .join('&');
};

export const buildArrayLength = length => {
    let l = [];
    for (let index = 0; index < length; index++) {
        l.push(index);
    }
    return l;
};