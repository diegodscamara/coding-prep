// 1. Map (key-value pairs)
const map = new Map();

map.set("name", "John");
map.set("age", 20);
map.set("city", "New York");

map.delete("age");

map.clear();

console.log(map);

const str = 'hello world';

const newMap = new Map();

for (const char of str) {
    if (newMap.has(char)) {
        newMap.set(char, newMap.get(char) + 1);
    } else {
        newMap.set(char, 1);
    }
}

console.log(newMap);

// 2. Loops
// for...of (iterating over array values)

const nums = [1, 2, 3, 4, 5];

for (const num of nums) {
    console.log(num);
}

for (let [i, v] of nums.entries()) {
    console.log(i, v);
}

// for...in (iterating over object properties)

const obj = {
    name: "John",
    age: 20,
    city: "New York"
}

for (const key in obj) {
    console.log(key, obj[key]);
}

// for (numeric index)

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// while (condition)

let i = 0;

while (i < nums.length) {
    console.log(nums[i]);
    i++;
}

// 3. Return 

function findMatch(arr, target) {
    for (const num of arr) {
        if (num === target) return true;
    }
    return false;
}
