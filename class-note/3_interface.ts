interface User {
  age: number;
  name: string;
}

let seho2: User = {
  age: 10,
  name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: '캡틴',
  age: 1
}

getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface sumfunction {
  (a: number, b: number): number;
}

let sum: sumfunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱 방식을 정의하는 인터페이스
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0] = 'd';

//딕셔너리 페턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

let obj: StringRegexDictionary = {
  cssFile: /₩.css$/,
  jsFile: /₩.js$/,
}

Object.keys(obj).forEach((value) => {
  console.log(value);
})

// 인터페이스 확장
interface Person  {
 name: string;
 age: number;
}

interface Developer2 extends Person {
  language: string;
}

let producer : Developer2 = {
  language: 'ts',
  name: 'test',
  age: 3 
}


