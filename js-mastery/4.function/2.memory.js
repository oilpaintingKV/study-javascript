function add(a, b) {
    console.log(a);
    console.log(b);
    return a + b;
}

const sum = add; // 메모리 주소를 할당하는 것 (함수 자체가 아니라 함수를 가리키는 메모리 주소)

// console.log(sum(1, 2));
console.log(add()); // 인자 값이 없으면 undefined +  undefined = NaN