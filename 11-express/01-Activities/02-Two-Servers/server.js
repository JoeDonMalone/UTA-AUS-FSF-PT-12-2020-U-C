const http = require('http');

const PORT_1 = 7000;
const PORT_2 = 7500;

const handleRequestOne = (request, response) => {
    // Send the below string to the client when the user visits the PORT URL
    response.end(`It Works!! Path Hit: ${request.url}`);
  };

const handleRequestTwo = (request, response) => {
    // Send the below string to the client when the user visits the PORT URL
    response.end(`It Works!! Path Hit: ${request.url}`);
  };

const serverOne = http.createServer(handleRequestOne);
const serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORT_1, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT_1}`);
  });

serverTwo.listen(PORT_2, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT_2}`);
  });

