let middleware = [];

middleware.push((next) => {
    console.log(1);
    next();
    console.log(1.1)
})

middleware.push((next) => {
    console.log(2);
    next();
    console.log(2.1)
})

middleware.push((next) => {
    console.log(3);
    next();
    console.log(3.1)
})

function compose(middlewares) {
    const copyMiddlewares = [...middlewares]
    let index = 0;

    const fn = () => {
        if (index >= copyMiddlewares.length) return;
        const middleware = copyMiddlewares[index];
        index++;

        // next; 递归实现迭代
        return middleware(fn);
    }

    return fn;
}

let fn = compose(middleware);

fn();
