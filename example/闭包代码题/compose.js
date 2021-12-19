// 实现 compose 函数，用法如下

function fn1(x) {
    return x + 1;
}

function fn2(x) {
    return x + 2;
}

function fn3(x) {
    return x + 3;
}

function fn4(x) {
    return x + 4;
}


function compose() {
    let ans = 0;
    let current = null;
    const args = [...arguments];
    let result = function (target) {
        if (!current) current = target;
        for (let i = 0; i < args.length; i++) {
            ans = args[i](current);
            current = ans;
        }
        return ans;
    }
    return result;
}

const a = compose(fn1, fn2, fn3 ,fn4);

console.log(a(1));