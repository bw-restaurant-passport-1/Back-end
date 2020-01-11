const Passport = require("./passport_model")
const Users = require("./user_model")
const Restaurants = require("./restaurant_model")
const db = require("../data/dbConfig")
const request = require("supertest")
const server = require("../server")

describe("passport_router_model", () => {
  it("should be test environment", () => {
    expect(process.env.DB_ENV).toBe("testing")
  })

  describe("create passport", () => {
    it("unauthorized should return 401", async () => {
      let response = await request(server).post("/api/passports").set('Authorization', "none").send({
          "user_id": 1,
          "restaurant_id": 1,
          "stamped": 1,
          "notes": "love it!",
          "myRating": 5
      })

      expect(response.status).toBe(401)
    })

    it("authorized should return 200", async () => {
      let register = await request(server).post("/api/users/register").send({
        username: "aiden1",
        password: "123",
        city: "gilbert",
        name: "aiden",
        email: "aiden1@aiden.com"
      })
      let data = JSON.parse(register.text)

      expect(data.token).toBeDefined()

      let response = await request(server).post("/api/passports").set('Authorization', data.token).send({
        "user_id": 1,
        "restaurant_id": 1,
        "stamped": 1,
        "notes": "love it!",
        "myRating": 5
      })

      expect(response.status).toBe(200)
    })

    beforeEach(async () => {
      await db("users").truncate()
      await db("passports").truncate()
    })
  })

  describe("get passport", () => {
    it("should show all passports", async () => {
      await Passport.add({
        "user_id": 1,
        "restaurant_id": 1,
        "stamped": 1,
        "notes": "love it!",
        "myRating": 5
      })

      await Passport.add({
        "user_id": 2,
        "restaurant_id": 1,
        "stamped": 1,
        "notes": "love it more!",
        "myRating": 5
      })

      let response = await request(server).get('/api/passports')
      let parsedResponse = await JSON.parse(response.text)
      expect(parsedResponse.length).toBe(2)
    })

    it("should show only specific user's pasports", async () => {
      await Passport.add({
        "user_id": 1,
        "restaurant_id": 1,
        "stamped": 1,
        "notes": "love it!",
        "myRating": 5
      })

      await Passport.add({
        "user_id": 2,
        "restaurant_id": 1,
        "stamped": 1,
        "notes": "love it more!",
        "myRating": 5
      })
      let response = await request(server).get('/api/passports/user/1')
      let parsedResponse = await JSON.parse(response.text)
      expect(parsedResponse.length).toBe(1)
    })

    it("should show restaurant info and user review", async () => {
      await Users.add({
        username: "aiden1",
        password: "123",
        city: "gilbert",
        name: "aiden",
        email: "aiden1@aiden.com"
      })

      await Passport.add({
        "user_id": 1,
        "restaurant_id": 1,
        "stamped": 1,
        "notes": "love it!",
        "myRating": 5
      })

      await Restaurants.add({
        "restaurantName": "Chili's",
        "streetAddress": "3917 S Gilbert Rd",
        "city": "Gilbert",
        "zipcode": "85296",
        "phoneNumber": "911",
        "websiteURL": "www.chilis.com"
      })
      let response = await request(server).get('/api/passports/user/1')
      let parsedResponse = await JSON.parse(response.text)
      expect(parsedResponse[0].restaurantName).toBe("Chili's")
      expect(parsedResponse[0].myRating).toBe(5)
    })

    beforeEach(async () => {
      await db("users").truncate()
      await db("passports").truncate()
    })
  })
})