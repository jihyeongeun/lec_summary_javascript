/* 01. array-method(배열 메소드) */

const foodList = ['물회', '삼계탕', '냉면', '수박', '물회'];

/* indexOf */
console.log(`foodList.indexOf('물회'): ${foodList.indexOf('물회')}`);            // 0
console.log(`foodList.indexOf('삼겹살'): ${foodList.indexOf('삼겹살')}`);        // -1 (배열에 없으면 -1) (따라서 배열 존재유무 확인 시 0보다 큰값 찾으면 됨)

/* includes */
console.log(`foodList.includes('물회'): ${foodList.includes('물회')}`);          // true
console.log(`foodList.includes('삼겹살'): ${foodList.includes('삼겹살')}`);      // false

const chineseFood = ['짜장면', '짬뽕', '탕수육'];

/* push */
chineseFood.push('팔보채');
chineseFood.push('양장피');

console.log(chineseFood);               // 탕수육 뒤에 팔보채 추가, 뒤에 양장피 추가
console.log(chineseFood.length);        // 5

/* pop */
chineseFood.pop();                      // 마지막에 있는 것이 삭제

console.log(`chineseFood.pop(): ${chineseFood.pop()}`);  // 양장피
console.log(`pop 후: ${chineseFood}`);  // 짜장면,짬뽕,탕수육,팔보채

const chickenList = ['양념치킨', '후라이드', '파닭'];

/* unshift */
console.log(`chickenList.unshift(): ${chickenList.unshift('간장치킨')}`);          // 기존배열 앞에 추가하기
console.log(`chickenList.unshift(): ${chickenList.unshift('마늘치킨')}`);

console.log(chickenList);

/* shift */
console.log(`chickenList.shift(): ${chickenList.shift()}`);                       // 앞에서부터 삭제     
console.log(`shift 후: ${chickenList}`);

/* concat: 두개 이상의 배열을 결합하여 새로운 배열을 반환(결합 순서의 의미) */
const idol1 = ['서태지와 아이들', '소녀시대'];
const idol2 = ['HOT', '젝스키스'];
const idol3 = ['핑클', '블랙핑크'];

console.log(`idol1을 기준으로 idol12 배열을 concat: ${idol1.concat(idol2)}`);      // idol1 뒤에 idol12 추가
console.log(`idol1을 기준으로 idol12 배열을 concat: ${[...idol1, ...idol2]}`);      // idol1 뒤에 idol12 추가, ES6할 때 스프레드 연산자 다시 설명

console.log(`idol3을 기준으로 idol1, idol2 배열을 concat: ${idol3.concat(idol1, idol2)}`);      // idol3 뒤에 idol1, idol2 추가

/* slice: 배열의 요소를 선택하여 복사하기 */
/* splice: 배열의 index 위치의 요소 제거 및 추가 */

const front = ['HTML', 'CSS', 'JavaScript', 'Vue'];

console.log(`front.slice(): ${front.slice(1, 3)}`);        // 1번 인덱스부터 (3-1)번 인덱스까지

/* splice(인덱스, 제거할 길이, 추가할 값1, 추가할 값2) */
console.log(`front.splice(): ${front.splice(3, 1, "JDBC")}`); 
console.log(front)

/* join: 배열을 우리가 워하는 구분자와 함께 결합하여 문자열 반환 */
const snackList =['사탕', '초콜릿', '껌', '마이쭈'];
console.log(`snackList.join(): ${snackList.join(' ')}`);
console.log(`snackList.join('/'): ${snackList.join(' ')}`);
