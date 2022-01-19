// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

var str: string = 'Каждый охотник желает знать';
function deleteCharacters(str: string, length: number) {
  if (str.length > length) {
    return str.slice(0, length);
  }
}

console.log(deleteCharacters(str, 9)); // Каждый
