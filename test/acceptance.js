import assert from "assert"
import request from "supertest"
import app from "../dist/app.js"

function check_response(expected) {
  return (res) => {
    let response_string = JSON.stringify(res.body)
    let expected_string = JSON.stringify(expected)
    if (response_string !== expected_string) {
      throw new Error(
        "\n" +
        "expected: \n" + expected_string + "\n" +
        "got: \n" + response_string
      )
    }
  }
}

function build_http_sanity_check(request) {
  return request
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
}

describe("GET /user", () => {
  it("responds with a list of all the users", (done) => {
    build_http_sanity_check(
      request(app).get("/users")
    )
      .expect(check_response([{name: "Duncan"}]))
      .end(done);
  })
})
