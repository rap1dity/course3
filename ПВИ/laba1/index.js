const http = require("http")

// 1
// http.createServer((req, res) =>{
//     res.end("<h1>Hello world</h1>")
// }).listen(3000)

// 2
// http.createServer(async (req, res) =>{
//     console.log(`запрошенный адрес: ${JSON.stringify(req.headers)}`)
//     if(req.url === '/' && req.method == 'POST'){
//         let body = [];
//         req.on('data', (chunk) => {
//             body.push(chunk);
//         }).on('end', () => {
//             body = JSON.parse(Buffer.concat(body).toString());
//             body.age +=1;
//             res.end(JSON.stringify(body))
//         });
//     }
//     else{res.end(`<html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>Title</title>
// </head>
// <body>
//     <p>метод: ${req.method}</p>
//     <p>url: ${req.url}</p>
//     <p>версия протокола: ${req.httpVersion}</p>
//     <p>заголовки: ${JSON.stringify(req.headers)}</p>
//     <p>тело: ${req.body}</p>
// </body>
// </html>`)}
// }).listen(3000)