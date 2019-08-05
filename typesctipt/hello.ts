function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'name';
console.log(sayHello(user));

let isDone: boolean = false;
let isDone2: boolean = Boolean(2);
let isDone3: Boolean = new Boolean(2);

let a: number = 6;
// 十六进制
let b: number = 0xffff;
// 二进制
let c: number = 0b101010;
// 八进制
let d:number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
let names: string = 'tom';
let age: number = 27;
let sentence = `hello, my name is ${names}. i'll be ${age + 1}`;
// 可以用void表示没有任何返回值的函数
function alertName(): void {
    alert('my name is od ')
}
let u: undefined = undefined;
let n: null = null;
let num: number = undefined;
let t: undefined;
let num2: number = t;
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
console.log(myFavoriteNumber.name);

