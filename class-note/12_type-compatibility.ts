// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

// interface Person {
//   name: String;
// }

class Person {
  name: string;
  skill: string;
}

var developer: Developer;
var person: Person;
developer = new Person();


// 재네릭
interface Empty<T> {
  // ....
}

var empty1: Empty<string> = 'test';
var empty2: Empty<number> = 3;

empty1 = empty2;
empty2 = empty1;


interface NotEmpty<T> {
  data: T;
}

var notempty1: NotEmpty<string> = {data: 'test'};
var notempty2: NotEmpty<number> = {data: 1234};
notempty1 = notempty2;
notempty2 = notempty1