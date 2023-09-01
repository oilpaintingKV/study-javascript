// 사용예제 1
function add(a, b) {
    console.log('function');
    return a + b;
}

const result = add(1, 2); // hover 시 상단에 function 정보
console.log(result); // function 3

// 사용예제 2
function fullName(firstName, lastName) {
    return `${lastName} ${firstName} 👐`;
}


let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '박';
let firstName2 = '철수';
let fullName2 = `${lastName2} ${firstName2}`;
console.log(fullName(firstName2, lastName2));
