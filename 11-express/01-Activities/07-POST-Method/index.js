const http = require('http');
const PORT = 8080;

// const data = JSON.stringify({
//     InputData: $('my-user-data').text()
//   })
  
//   const options = {
//     hostname: '/',
//     port: 8080,
//     path: '/',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Content-Length': data.length
//     }
//   }
  
//   const req = http.request(options, res => {
//     console.log(`statusCode: ${res.statusCode}`)
  
//     res.on('data', d => {
//       process.stdout.write(d)
//     })
//   })
  
//   req.on('error', error => {
//     console.error(error)
//   })
  
//   req.write(data)
//   req.end()
  
//   const server = http.createServer(req);
  
//   // Start our server
//   server.listen(PORT, () => {
//     console.log(`Server listening on: http://localhost:${PORT}`);
//   });
  
//   btn = $('btn').click(req())