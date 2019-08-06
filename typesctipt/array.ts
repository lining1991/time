// 数组的类型

// 类型加方括号表示法
let fibonacci: any[] = [1, 1, 2, '3', 5];
let fibonacci2: number[] = [1, 1, 2, 3, 5];
// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
// fibonacci.push('hahha') 报错



// 数组泛型
let arr1:Array<number> = [1, 1, 2, 2]

// 用接口表示数组
interface NumberArray {
    [xx: number]: number
}
let arr2: NumberArray = [2, 3];


// 类数组
function sum() {
    let args: number[] = arguments;
} 