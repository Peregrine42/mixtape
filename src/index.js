import app from "./app.js"

let server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log(
    'app listening at http://%s:%s', 
    host, port
  );
});
