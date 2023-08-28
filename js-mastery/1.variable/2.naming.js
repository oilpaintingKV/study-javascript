// 주석을 달면 됨
/** 
 * 주석이 됨
 * 다음줄로 자동으로 넘어감
*/

/** 변수 규칙!
 * 라틴문자(0-9, a-z, A-Z,), _
 * 대소문자를 구분함
 * 추천: camelCase (likeThis) 
 * 한국어 X
 * 예약어 X
 * 숫자로 시작 X
 * 특수문자 X (_, $ 두가지는 예외)
 * 이모지 X
 * 여러개의 변수를 1, 2, 3 숫자로 구분 X -> 최대한 의미있게, 구체적인 이름으로 작성!
 */

let apple;
let redApple;

// 나쁜예제
let num = 25;

// 좋은예제
let myAge = 25;

// 나쁜예제
let audio1;
let audio2;

// 좋은예제
let backgroundAudio;
let windAudio;

// 꿀팁! 이렇게 작성해두면 이후 audio 만 작성 하고 찾을 수 있음
let audioBackground;
let audioWind;
