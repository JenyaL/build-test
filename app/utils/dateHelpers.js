export function isSameDay(a, b) {
    return new Date(a).getDate() == new Date(b).getDate()
        && new Date(a).getMonth() == new Date(b).getMonth()
        && new Date(a).getFullYear() == new Date(b).getFullYear();
}

export function slowFormat(date) {
    let s = "";
    for (let i = 0; i < 100000; i++) {
        s = date.toString();
    }
    return s;
}