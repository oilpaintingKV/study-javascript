// 접근자 프로퍼티 (Accessor Property)
// 실제로는 함수를 말하는 것
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // get
  get fullName() { // 풀 네임을 만들어주는 함수 사용하는 이유는 업데이트 되어야 하기 때문에
    return `${this.lastName} ${this.firstName}`;
  }

  // set
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('흥민', '손'); // 학생 객체 만들기
student.firstName = '웅정';
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '김민재';
