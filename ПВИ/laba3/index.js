require("dotenv").config()
const express = require("express")
const readline = require("readline")
const PORT = process.env.PORT | 5000



const router = require("./router/index")
const states = ["norm", "stop", "test", "idle"]
let state = "norm"
const app = express()


const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

app.use(express.json())
app.use('/fact',router)
app.get("/status", (req, res) =>{
   res.end(`<h1>${state}</h1>`)
})
app.get("/", (req,res) =>{
   const now = new Date()
   const factList = []
   const allPromises = []
   for(let i = 1; i <= 20; i++){
      allPromises.push(fetch(`http://localhost:5000/fact?k=${i}`)
          .then(res => res.json())
          .then(resJSON => `<li>${resJSON.k}.Результат: ${new Date().getMilliseconds() - now.getMilliseconds()}-${resJSON.k}/${resJSON.fact}</li>`
          )
      )
   }
   Promise.all(allPromises)
       .then((values ) => {
          console.log(`Общая продолжительность запросов составила ${new Date().getMilliseconds() - now.getMilliseconds()} мс`)
          res.setHeader("Content-Type", "text/html; charset=utf-8")
          res.end(`<ul style="list-style: none">${values.join('\n')}</ul>`)
       })
})


const handleInput = (newState) => {
   if (states.includes(newState)) {
      console.log(`reg = ${state}-->${newState}`);
      state = newState;
      rl.setPrompt(`${state}->`)
   } else if (newState === "exit") {
      process.exit()
      rl.close()
   }
   rl.prompt()
};

rl.on("line",handleInput)

app.listen(PORT, () => {
   console.log(`Server started on PORT ${PORT}`)
   //rl.setPrompt(`${state}->`)
   //rl.prompt()
})