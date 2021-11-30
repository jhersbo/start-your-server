let http = require('http')
let server = http.createServer(function (req, res) {
    res.writeHeader(200)
    res.write('<h1 style="color: blue">Hello FSD!</h1>')
    res.end()
    
})

server.listen(3000, () => {
    console.log('Server Running')
})