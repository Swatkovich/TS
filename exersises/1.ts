// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

var str: string = 'Каждый охотник желает знать';
function stringToarray(str: string): string[] {
  return str.trim().split(' ');
}

var arr: string[] = stringToarray(str);

console.log(arr); // ['Каждый', 'охотник', 'желает', 'знать']
