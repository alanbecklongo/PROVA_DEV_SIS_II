const express= require ("express")
const routes = require("./rotass")
const server = express()

server.use(routes)
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.listen(3000,()=>{
    console.log("Servidor em execução...")
})
