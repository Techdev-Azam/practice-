// const http = require("http")
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{
//         "content-type":"text/plain"
//     })
//     res.end("hello world")
// })

// server.listen(3000,()=>{
//         console.log("server running on prot ")
// })

// const http  = require("http")
// const { json } = require("stream/consumers")
// const users = []
// const server = http.createServer((req,res)=>{
//        res.setHeader("Content-type", "application/json")
//        if(req.method === "GET" ){
//                 res.writeHead(200)
//                 res.end(JSON.stringify(users))
//        }
//        else if (req.method==="POST" ){
//                 const  body = ""
//                 req.on("data", chunk =>{
//                         body += chunk.toString()
//                 })
//                 req.on("end",()=>{
//                         const newuser = JSON.parse(body)
//                         users.push(newuser)
//                         res.end(JSON.stringify(newuser))
                        
//                 })
//        }
//        else {
//                 res.statusCode(404)
//                 res.end(JSON.stringify("somthing went wrong"))
//        }
// })





// server.listen(3000,()=>{
//         console.log("server is running on port 3000")

// })


// const http = require ('http')
// const user = []
// const server = http.createServer((req,res)=>{
//         res.setHeader("Content-type", "application/json")
//         if (req.method === 'GET'){
//                         res.writeHead(200)
//                         res.end (JSON.stringify(user))
//         }
//         else if (req.method === "POST"){
//                 const body = ""
//                 res.on("data" , chunk => {
//                         body += chunk.toString()
//                 })
//                 res.on("end", ()=>{
//                         const newust  = JSON.parse(body)
//                         user.push(newust)
//                         res.end(JSON.stringify(user))
//                 })
//         }
// })

// server.listen(3000,()=>{
//                 console.log("working on 3000")
// })

// const http = require("http")

// const uset =  [{azam:"good guy", firdous : "good girl"}]


// const server = http.createServer((req,res)=>{
//         res.setHeader("content-type" , "application/json")

// })

// server.listen(3000,()=>{
//                 console.log("the server is running on the 3000 port")
// })


// const http = require("http")
// const users = []
// const server = http.createServer((req,res)=>{
//                 res.setHeader("content-type", "application/json")
//                 res.setHeader("Access-Control-Allow-Origin","*")
//                 if(req.method === "GET"){
//                         console.log("working")
//                         res.writeHead(200)
//                         res.end(JSON.stringify(users))
//                 }
//                 else if(req.method === "POST"){
//                         const body = ""
//                         res.on("data",chunk=>{
//                                 body += chunk.toString()  
//                         })
//                         res.on("end", ()=>{
//                                 const user = JSON.parse(body)
//                                 users.push(user)
//                                 res.end(JSON.stringify(user))

//                         })
//                 }
// })

// server.listen(3000,()=>{
//         console.log("the port is running on 3000")
// })

// const { read } = require("fs")
// const http = require("http")
// const arr = []
// const server = http.createServer((req,res)=>{
//                 // res.writeHead(200, {
//                 //         "content-type":"text/plain"
//                 // })
//                 // res.end("i have a best girl ever")

//                 res.setHeader("content-type" , "application/json")
//                 if (req.method === "GET"){
//                         res.writeHead(200)
//                         res.end(arr)
//                 }
//                 else if (req.method === "POST"){
//                         const body = ""
//                         res.on("data", chunk =>{
//                                 body+= chunk.toString()
//                         })
//                         res.on("close", ()=>{
//                                 const newser = JSON.parse(body)
//                                 arr.push(newser)
//                                 res.end(JSON.parse(newser))

//                         })
//                 }else {
//                         res.writeHead(401)
//                         res.end("its not wokring")
//                 }
// })
// server.listen(3000,()=>{
//                 console.log("ys its working")
// })


const { read } = require("fs")
const http = require("http")


const server = http.createServer()

server.on("request",(req,res)=>{
       res.setHeader( "Access-Control-Allow-Origin", "*" )
        res.setHeader("content-type", "application/json")
       if(req.method === "GET" && req.url === "/"){
                        console.log("this part gone 2")
                res.writeHead(200)
                res.end("welcome")
       }else if (req.method === "GET" && req.url === "/health"){
               res.setHeader("content-type", "application/json")
        
               console.log("this part gone 2")
                res.writeHead(200)
                res.end(JSON.stringify({status: "ok"}))

       }
       else if (req.method === "POST" && req.url === "/echo"){
               
                let body = ""
                req.on("data", chunk =>{
                        body += chunk.toString()
                })
                req.on("close",()=>{
                        console.log(body)
                })
       }
                
       
       else {
                res.statusCode = 401
                res.end("401 not working")

       }
})
server.listen(3000,()=>{
        console.log("its working")
})