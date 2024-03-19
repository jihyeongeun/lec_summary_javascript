/* 01. array-and-object-copy(스프레드 문법을 이용한 배열 및 객체 복사) */

/* 1. 배열 복사 */
let arr = [10, 30, 20];
let arrCopy = [...arr];       // 스프레드 문법을 활용한 깊은 복사
let arrCopy2 = arr;           // 얕은 복사

console.log(arr);
console.log(arrCopy);
console.log(arrCopy2);
console.log(arr === arrCopy);
console.log(arr === arrCopy2);

/* 2. 객체 복사 */
let obj = {name: '홍길동', age: 20, addr: '서울시', hobby: ['축구', '농구']};

let objCopy = {...obj};

/* 추가적으로 나머지 연산자 개념으로도 활용도 가능하다. */
/* let age = 30;
let name = '강감찬'
let objCopy = {...obj, name, age}; */

console.log(obj);
console.log(objCopy);
console.log(obj === objCopy);


