function currying(fn, ...args) {
    const originFnArgumentLength = fn.length;
    let allArgs = [...args];
    const resFn = (...newArgs) => {
        allArgs = [...allArgs, ...newArgs];

        if (allArgs.length === originFnArgumentLength) {
            // 收集够
            return fn(...allArgs);
        } else {
            return resFn;
        }
    };

    return resFn;
}

const add = (a,b,c) => a + b + c;

const a1 = currying(add, 1)
const a2 = a1(2);

console.log(a2(3)); // 6