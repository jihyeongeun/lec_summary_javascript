/* 02. function hoisting(함수 호이스팅) */


/* 함수 선언문(js 코드 상에서 먼저 해석됨, 반드시 이름이 있어야함(익명함수X)) */
// function hello(name){
    //     return `${name}님 반갑습니다.`;
    // }
    
    var hello = function (name){
        return `${name}님 반갑습니다.`;
    }
    console.log(hello('이몽룡'));