let arr = [12, 45, 67, 89];
const fruit = ['banana', 'apple', 'orange', 'kiwi'];
const mixed = [89, 'banana', [12, 45, 30]];
console.log(mixed);


const arr1 = new Array(90, 80, 70, 60);
console.log(arr1);

console.log(arr1.length);
console.log(arr1.indexOf(60));
console.log(arr1.lastIndexOf(60));
arr1.push(50);
arr1.unshift(20);
arr1.reverse();
arr1.slice(3);
arr1.splice(0, 1);
arr2 = [4, 5, 6, 7, 8];
let arrays = arr.concat(arr2);
console.log(arrays);

let marks = [90, 98, 96, 94];

marks.forEach(function(element) {
    console.log(element);
});

let obj = {
    name: 'Tahemeena',
    age: 20,
    city: 'Pune',
    education: 'M.E'
};

for (let key in obj) {
    console.log(`My ${key} is  ${obj[key]}`);
}

let fruits = ['kiwi', 'water-melon', 'Guvava', 'Lemon']

fruits.forEach(function(elements) {
    console.log(elements);
});


let vegetables = ['carrot', 'cabbage', 'tomato', 'onion'];

vegetables.forEach(function(element1) {
    console.log(element1.substring(1, 4));
});



let numbers = [3, 56, 78, 90, 45];

numbers.forEach(function(num) {
    console.log(num);
})
let obj1 = {
    name: 'Fariha',
    age: 5,
    city: 'Pune',

};

for (let key in obj1) {

    console.log(` My ${key} is ${obj1[key]}`);
}

let obj2 = {

    name: 'Aleena',
    age: 20,
    city: 'Pune'
};


for (let key in obj2) {
    console.log(`My ${key} is ${obj2[key]}`);
}