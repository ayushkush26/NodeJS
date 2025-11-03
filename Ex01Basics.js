console.log("Testing the Js function for Nodejs")

// alert("Hello world")

// const result = prompt("Ayush Kush");      These method will not work in node JS...
// console.log(result);

const data = [23,54,65,22,4];
console.log(data);
for (const key in data) {
       console.log(`key:${key},value:${data[key]}`);
}
console.log(JSON.stringify(data));

const fruits = ['apple','orange','grapes','banana','pineapple'];
console.log(fruits);

console.log("--------------------------");

// Basic For Loop 

for(let i = 0;i < fruits.length; i++){
    console.log(fruits[i]);
}
console.log("--------------------------");

// For IN 

for (let key in fruits) {
       const element = fruits[key];  
       console.log(element);
}

console.log("--------------------------");

// For OF 

for (const element of fruits) {
       console.log(element);
}

console.log("--------------------------");

// .forEach 

fruits.forEach((value,key) => {
       console.log(`Key is ${key},Value is ${value}`);
})


console.log("--------------------------");

// Shift and Unshift 

console.log(fruits.shift());
console.log(fruits);

console.log(fruits.unshift("apple"));
console.log(fruits);



