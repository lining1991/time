// 有时候 确实需要在还不确定类型的时候就访问其中一个类型的属性或方法
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

// 一个错误的例子 类型断言不是类型转换 string和number不能经由类型断言转为boolean
function tpBoolean(something: string | number): boolean {
    return <boolean>something;
}