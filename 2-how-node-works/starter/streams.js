const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //Selution 1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //Solution 2: Streams
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (error) => {
  //     console.log(error);
  //     res.statusCode = 500;
  //     res.end("File not found");
  //   });
  //Solution 3
  const readable = fs.createReadStream("test-file.txt");
  // readebleSource.pipe(writeableDestination)
  readable.pipe(res);
});

server.listen(8000, "localhost", () => {
  console.log("Server listening...");
});
