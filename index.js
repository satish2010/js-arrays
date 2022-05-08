// Adding values to an array
const number = [3, 4];
number.push(5, 6);
number.unshift(1, 2);
number.splice(2, 0, 'a', 'b');
console.log(number);
// Working with indexes
const num1 = [1, 2, 3, 1, 4];
console.log(num1.indexOf(1, 3));
console.log(num1.lastIndexOf(1));
console.log(num1.includes(1));
// Array of object
const courses = [
    { id: 1, name: 'Satish' },
    { id: 2, name: 'Anay' }
]
const course = courses.find(course => course.name === 'Satish')
console.log(course);
// Delete value from array
const num2 = [1, 2, 3, 4];
console.log(num2.pop());
console.log(num2.shift());
console.log(num2);
// delete using splice
const num3 = [1, 2, 3, 4];
console.log(num3.splice(2, 2));
// Empty an Array
const num4 = [1, 2, 3, 4];
num4.length = 0;
console.log(num4);
// combining array
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
console.log(combined);
const slice = combined.slice(2, 4);
console.log(slice);
// copying an array
const third = [1, 2, 3];
const fourth = [4, 5, 6];
const combinedTwo = [...third, ...fourth];
console.log(combinedTwo);
const copy = [...combinedTwo];
console.log(copy);
// for each loop
const five = [1, 2, 3, 4];
five.forEach((five, index) => {
    console.log(five, index);
})
// join in array
const num5 = [1, 2, 3]
const joined = num5.join(',');
console.log(joined);
// split in array
const message = "This is my first message";
const split = message.split(' ');
console.log(split);

const joinedTwo = split.join('-');
console.log(joinedTwo);

const num6 = [1, 3, 2];
console.log(num6.sort());
console.log(num6.reverse());
// sorting 
const sortOne = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' }
];
sortOne.sort(function compare(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(sortOne);
// every
const num7 = [1, 2, -2, 3];
const allPositive = num7.every(function (value) {
    return value >= 0;
})
console.log(allPositive);
const atLeastOnePositive = num7.some(function (value) {
    return value >= 0;
})
console.log(atLeastOnePositive);
// filtered
const num8 = [1, 2, -2, 3];
const filtered = num8.filter((value) => value >= 0)
console.log(filtered);

const items = filtered.map((value) => '<li>' + value + '</li>');
console.log(items);

const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

const num9 = [1, 2, -2, 3];
const itemsOne = num9
    .filter((num) => num >= 0)
    .map(num => ({ value: num }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
console.log(itemsOne);

//Sum of an Array using reduce
const num10 = [1, 2, -2, 3];
const reduceNum = num10.reduce((a, c) => a + c);
console.log(reduceNum);


