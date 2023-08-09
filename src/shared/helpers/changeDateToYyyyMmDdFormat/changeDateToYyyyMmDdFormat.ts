export function changeDateToYyyyMmDdFormat(date: Date) {
    return date.toLocaleDateString().replace('/', '-').split('-').reverse().join('-');
}
