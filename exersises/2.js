// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
var str = 'Каждый охотник желает знать';
function delete_characters(str, length) {
    if (str.length > length) {
        return str.slice(0, length);
    }
}
console.log(delete_characters(str, 9)); // Каждый
