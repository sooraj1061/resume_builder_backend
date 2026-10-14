// import json server
const jsonServer=require('json-server')
// create a server for json server
const server=jsonServer.create()

const router=jsonServer.router('db.json')
const middleware=jsonServer.defaults()
server.use(middleware)
server.use(router)

server.listen(3000,()=>{
    console.log("Resume Builder server running on Port 3000");
    
})