import 'core-js'
import express from "express"

let app = express()

app.get("/users", (req, res) => {
  res
    .status(200)
    .send([{name: "Duncan"}])
})

export default app
