const colorsStr: string[] = ['red', 'blue', 'yellow'];

const dates: Date[] = [new Date(), new Date()];

const fruitByColor = [['tomato'], ['apple'], ['lemon']];

const fruitByColor1: string[][] = [];

// Help with inference when extracting values
const color = colors[0];
const color1 = colors.pop();

// Prevent incompatible values
colors.push(true);

// Help with 'map'
colors.map((color: string): string => {
  return color.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2021-11-11'];

const importantDates2: (Date | string)[] = [];
importantDates2.push('2021-11-10');
importantDates2.push(new Date());
importantDates2.push(10);
