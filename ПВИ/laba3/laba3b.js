const uuid = require("uuid");
const firstJob = () => new Promise(res => {
    setTimeout(() => res("Hello World"),2000)
})


const firstJobAsync = async () => {
    try {
        let result = await firstJob()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
// firstJob()
//     .then(res => {console.log(res)})
//     .catch(err => console.log(err))

//firstJobAsync().then()

const secondJob = () => new Promise((res, rej) => setTimeout(() => rej("timed out"), 3000))


const secondJobAsync = async () =>{
    try{
        const result = await secondJob()
    }
    catch(err){
        console.log(`Promise error: ${err}`)
    }
}

// secondJob()
//     .catch(err => console.log(`Promise error: ${err}`))
//
// secondJobAsync().then()

const thirdJob = (data) => new Promise((res, rej) => {
    if(typeof(data) !== "number")
        rej("error")
    data % 2 === 0 ? setTimeout(() => res("even"), 2000) : setTimeout(() => res("odd"), 1000)
})

const thirdJobAsync = async (data) =>{
    try{
        const result = await thirdJob(data)
        console.log(result)
    }
    catch(err){
        console.log(`Promise error: ${err}`)
    }
}

// thirdJob(4)
//     .then(val => console.log(val))
//     .catch(err => console.log(`Promise error: ${err}`))
//
// thirdJobAsync(4).then()

const createOrder = cardNumber => new Promise((res, rej) => {
    if(!validateCard(cardNumber))
        rej("Card is not valid")
    else
        setTimeout(() => res(uuid.v4()), 5000)
})
    .then(orderId => proceedToPayment(orderId))

const validateCard = (cardNumber) => {
    console.log(`Card number: ${cardNumber}`)
    return Math.random() >= 0.5;
}

const proceedToPayment = (orderId) => {
    console.log(`Order ID: ${orderId}`)
    const paymentStatus = Math.random() >= 0.5 ? "Payment Successfull" : "Payment Failed"
    return new Promise(res => res(paymentStatus))
}

const createOrderAsync = async (cardNumber) => {
    try {
        const status = await createOrder(cardNumber)
        console.log(status)
    }
    catch(err){
        console.log(err)
    }
}
// createOrder("1234 5678 9123 456")
//     .then(status => console.log(status))
//     .catch(err => console.log(err))
//
// createOrderAsync("1234 5678 9123 456").then()

const getSquare = (num) => new Promise((res, rej) => {
    if(typeof(num) !== "number")
        rej(`${num} is not number`)
    else
        setTimeout(() => res(Math.pow(num, 2)), 1000)
})

const getCube = (num) => new Promise((res, rej) => {
    if(typeof(num) !== "number")
        rej(`${num} is not number`)
    else
        setTimeout(() => res(Math.pow(num, 3)), 500)
})

const getBiquadrate = (num) => new Promise((res, rej) => {
    if(typeof(num) !== "number")
        rej(`${num} is not number`)
    else
        setTimeout(() => res(Math.pow(num, 4)), 200)
})


// Promise.all([getSquare(2),getCube(2),getBiquadrate(2)])
//     .then(values => console.log(values))
//     .catch(err => console.log(err))


Promise.race([getSquare(2),getCube(2),getBiquadrate(2)])
    .then(value => console.log(value))

Promise.any([getSquare(2),getCube(2),getBiquadrate("2")])
    .then(res => console.log(res))