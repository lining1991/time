// 有时候 确实需要在还不确定类型的时候就访问其中一个类型的属性或方法
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
