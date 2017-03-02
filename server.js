var ws = require("nodejs-websocket")

// Scream server example: "hi" -> "HI!!!"
console.log("Listening...")
var server = ws.createServer(function (conn) {
    var ip = conn.socket.remoteAddress.toString()
    ip  = ip.substring(ip.lastIndexOf(':')+1)
    console.log("New connection from:" + ip)

    conn.on("text", function (str) {
      if (str=='ping') {
        conn.sendText('pong')
      }else{
        console.log("Received "+str)
        conn.sendText(str.toUpperCase()+"!!!")
        }
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
    conn.on("error",function(err) {
      console.log("Error")

    })
}).listen(81)
