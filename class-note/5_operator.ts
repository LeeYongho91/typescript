let kanye: string | number | boolean;

function logMessage(value: string | number) {
  if(typeof value === 'number') {
    value.toLocaleString();
  }
  if(typeof value === 'string') {
    value.toString();
  }

  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100); 

interface Person {
  name: string;
  age: number
}

interface Developer {
  name: string;
  skill: string;
}

function askSomeone(someone: Developer | Person) {
  // developer, person 공통 속성만 가능
    someone.name;
}

askSomeone({name: '디벨로퍼', skill: '웹 개발'});

// function askSomeone(someone: Developer & Person) {
//     someone.name;
//     someone.age;
//     someone.skill;
// }


