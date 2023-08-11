function logText<T>(text:T): T {
  console.log(test);
  return text;
}

const str = logText<string>('abc');
const num = logText<number>(0);

const login = logText<boolean>(true);


// 인터페이스에 제네릭을 선언하는 방법
interface dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: dropdown<number> = {value: 123, selected: true};

// 재네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   return text;
// }

// logTextLength<string>(['hi']);

// 재네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}

logTextLength('qwe');
// logTextLength(10);
logTextLength({length: 10});


// 재네릭 타입 제한 3 - keyof

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('name');
// getShoppingItemOption('desc');
