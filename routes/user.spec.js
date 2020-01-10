const Users = require("./user_model")
const db = require("../data/dbConfig")

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
})