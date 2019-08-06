function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'name';
console.log(sayHello(user));
var isDone = false;
var isDone2 = Boolean(2);
var isDone3 = new Boolean(2);
var a = 6;
// 十六进制
var b = 0xffff;
// 二进制
var c = 42;
// 八进制
var d = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
var names = 'tom';
var age = 27;
var sentence = "hello, my name is " + names + ". i'll be " + (age + 1);
// 可以用void表示没有任何返回值的函数
function alertName() {
    alert('my name is od ');
}
var u = undefined;
var n = null;
var num = undefined;
var t;
var num2 = t;
// 在任意值上访问任何属性都是允许的 调用任何方法也都是允许的 可以理解对它的任何操作，返回的内容的类型都是任意值
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
console.log(myFavoriteNumber.name);
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型 注意说的是声明的时候不是声明且赋值
var something;
something = 'evnen';
something = 7;
// 类型推论
// 以下两行编译的时候会报错
// let myFavoriteNumber3 = 'seven';
// myFavoriteNumber3 = 7;
// 联合类型
var myFavoriteNumber2;
myFavoriteNumber2 = 'senene';
myFavoriteNumber2 = 7;
// 访问联合类型的属性和方法，比方上个例子 只能访问toString属性 访问length会报错
console.log(myFavoriteNumber2.toString());
console.log(myFavoriteNumber2.length);
function getLength(something) {
    return something.toString();
}
