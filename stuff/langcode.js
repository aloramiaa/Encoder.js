export const langcode = (id) => {
    return id == 1 ? 'ru' : id == 2 ? 'fr' : id == 3 ? 'ua' : 'en';
}
export const debug = (path) => {
    return path.replace(/\/(.*?)\/(.*?)/, '/$2');
}