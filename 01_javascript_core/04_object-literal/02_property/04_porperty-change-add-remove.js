var dog={
    name:'뽀삐'
};

/* 1. 프로퍼티 수정 */
dog.name = '두부';
console.log(dog);

/* 2. 프로퍼티 동적 추가 */
dog.age = 3;
console.log(dog);

/* 3. 프로퍼티 동적 삭제 */
delete dog.age;
console.log(dog);

// delete dog.name;
// console.log(dog);

/* 자바스크립트는 존재하지 않는 프로퍼티 제거도 에러 발생조차 하지 않는다. */
// delete dog.something;
// console.log(dog);
