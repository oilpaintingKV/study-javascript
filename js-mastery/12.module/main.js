// import { increase as increase1 } from './counter.js'; // 이름을 변경하고 싶을 때
// import { increase, getCount } from './counter.js'; 
import * as counter from './counter.js'; // 하나의 이름으로 그룹화

counter.increase(); // 해당 함수는 호출 할 수 있음 1
counter.increase(); // 2
counter.increase(); // 3
console.log(counter.getCount());

// count = 10; // html type=module 사용하게되면 각각의 모듈 화로 작업되어있어 연결되지 않음
