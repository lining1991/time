// 需要对输入和输出都做限制
function sum(x: number, y: number): number {
    return x + y;
}

let mySum = function (x: number, y: number): number {
    return x + y;
}
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
let mySum2: (x:number, y:number) => number = function(x:number, y:number):number {
    return x + y;
}

// 用接口定义函数的形状 参数名并不固定 只固定输入类型 输入个数 以及返回类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source2, subString) {
    return source2.search(subString) !== -1;
}
mySearch('ssss', '2');


// 定义可选参数 注意可选参数必须放在最后，这个很容易理解
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');



// 参数默认值
// TypeScript 会将添加了默认值的参数识别为可选参数。并且不受「可选参数必须接在必需参数后面」的限制
function buildName2(lastName: string = 'cat', firstName: string, ) {
    return firstName + ' ' + lastName;
}
let cat = buildName2(undefined, 'cat');



// 剩余参数
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);
function push2(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}


// 重载： 允许一个函数接受不同数量或类型的参数时，做出不同的处理
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 缺点：表达不精确
function reverse2(x: number): number;
function reverse2(x: string): string;
function reverse2(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}