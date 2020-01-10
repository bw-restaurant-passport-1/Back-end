const Users = require("./user_model")
const db = require("../data/dbConfig")
const request = require("supertest")
const server = require("../server")

// beforeAll(async (done) => {
//   await Users.add({
//     username: "aiden",
//     password: "123",
//     city: "gilbert",
//     name: "aiden",
//     email: "aiden@aiden.com"
//   }) 

//   request(server)
//   .post("/api/users/login")
//   .send({
//     username: "aiden",
//     password: "123",
//   })
//   .end((err, response) => {
//     token = response.body.token
//     done()
//   })
// })

describe("user_router_model", () => {
  it("should be test environment", () => {
    expect(process.env.DB_ENV).toBe("testing")
  })

  describe("register", () => {
    it("should register a new user to the db", async () => {
      await Users.add({
        username: "aiden",
        password: "123",
        city: "gilbert",
        name: "aiden",
        email: "aiden@aiden.com"
      })

      const users = await db("users")
      expect(users).toHaveLength(1)
    })

    it("should return registered user", async() => {
      await Users.add({
        username: "aiden",
        password: "123",
        city: "gilbert",
        name: "aiden",
        email: "aiden@aiden.com"
      })
      let user = await db("users")
      expect(user[0].username).toBe("aiden")
    })

    beforeEach(async () => {
      await db("users").truncate()
    })
  })

  describe("login", () => {
    it("should return token", async() => {
      await request(server).post("/api/users/register").send({
        username: "aiden",
        password: "123",
        city: "gilbert",
        name: "aiden",
        email: "aiden@aiden.com"
      })

      const response = await request(server)
      .post("/api/users/login")
      .send({username: "aiden", password: "123"})

      expect(response.text).toContain("token")
    })
    
    // test('It responds with JSON', () => {
    //   return request(server)
    //     .get('/users/users')
    //     //.set('Authorization', token)
    //     .then((response) => {
    //       expect(response.statusCode).toBe(200);
    //       expect(response.type).toBe('application/json');
    //     });
    // });
    beforeEach(async () => {
      await db("users").truncate()
    })
  })
})