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
// 声明一个void类型的变量没有什么用，因为你只能将它赋值为undefined和null
let unusabele2: void = undefined;



// undefined和null是所有类型的子类型
let u: undefined = undefined;
let n: null = null;
let num: number = undefined;
let t: undefined;
let num2: number = t;
// 在任意值上访问任何属性都是允许的 调用任何方法也都是允许的 可以理解对它的任何操作，返回的内容的类型都是任意值
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
console.log(myFavoriteNumber.name);
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型 注意说的是声明的时候不是声明且赋值
let something;
something = 'evnen'
something = 7;



// 类型推论
// 以下两行编译的时候会报错
// let myFavoriteNumber3 = 'seven';
// myFavoriteNumber3 = 7;




// 联合类型
let myFavoriteNumber2: string | number;
myFavoriteNumber2 = 'senene';
myFavoriteNumber2 = 7;
// 访问联合类型的属性和方法，比方上个例子 只能访问toString属性 访问length会报错
console.log(myFavoriteNumber2.toString());
console.log(myFavoriteNumber2.length);
function getLength(something: string | number): string {
    return something.toString();
}
// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型，此时若后边再访问它的不存在的属性会报错

