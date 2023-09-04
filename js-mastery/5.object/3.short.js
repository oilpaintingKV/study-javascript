const x = 0;
const y = 0;
const coordinate =  {x , y}; // {x: x, y: y}; 같은 경우에는 축약 가능
console.log(coordinate);

function makeObj (name, age) {
    return {
        name, // name: name 축약 가능
        age, // age: age
    }
}