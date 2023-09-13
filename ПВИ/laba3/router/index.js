const Router = require("express").Router
const router = new Router()


router.get("/", async (req, res) => {
    const num = parseInt(req.query.k);
    const factorial = {k: num, fact: await getFactorialImmediate(num)}
    res.end(JSON.stringify(factorial))
})



const getFactorial = (num) =>{
    if(num === 1 || num === 0)
        return 1;
    else
        return num * getFactorial(num - 1)
}

const getFactorialTick = async (num) => {
    if (num === 1 || num === 0)
        return 1;
    else {
        return await new Promise((res) =>
            process.nextTick(async () => res(num * await getFactorialTick(num - 1)))
        )
    }
}

const getFactorialImmediate = async (num) => {
    if (num === 1 || num === 0)
        return 1;
    else {
        return await new Promise((res) =>
            setImmediate(async () => res(num * await getFactorialTick(num - 1)))
        )
    }
}

module.exports = router