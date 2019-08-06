interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'tom',
    age: 25
}
// 以上，约束了tom的形状必须和接口Person一致
// 也就是说定义的变量比接口少了一些属性或者多了一些属性，都是不被允许的


// 可选属性，应用场景是不需要完全匹配一个形状
interface Animal {
    name: string;
    age?: number;
}
let dog: Animal = {
    name: 'dog'
}


// 任意属性
interface Bird {
    name: string,
    age?: number,
    [xxx: string]: any;
}
let bird1 = {
    name: 'bird',
    gender: 2
}
let bird2 = {
    name: bird1,
    gender: 'hahha'
}
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
// 以下代码会报错
// interface Person3 {
//     name: string,
//     age?: number,
//     [propName: string]: string
// }



// 只读属性
interface Book {
    readonly id: number,
    name: string,
    year: number,
    [xx: string]: any
}
let aaa: Book = {
    id: 111,
    name: 'nishi',
    year: 123,
    number: 234
}
// aaa.id = 123; 只读属性被赋值，编译时会报错
