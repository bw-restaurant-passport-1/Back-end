const Restaurant = require("./restaurant_model")
const db = require("../data/dbConfig")
const request = require("supertest")
const server = require("../server")

describe("restaurant_router_model", () => {
  it("should be test environment", () => {
    expect(process.env.DB_ENV).toBe("testing")
  })

  describe("create a restaurant", () => {
    it("unauthorized should return 401", async () => {
      let response = await request(server).post("/api/restaurants").set('Authorization', "none").send({
        "restaurantName": "Chili's",
        "streetAddress": "3917 S Gilbert Rd",
        "city": "Gilbert",
        "zipcode": "85296",
        "phoneNumber": "911",
        "websiteURL": "www.chilis.com"
      })

      expect(response.status).toBe(401)
    })

    it("authorized should return 200", async () => {
      let register = await request(server).post("/api/users/register").send({
        username: "aiden2",
        password: "123",
        city: "gilbert",
        name: "aiden",
        email: "aiden2@aiden.com"
      })
      let data = JSON.parse(register.text)

      expect(data.token).toBeDefined()

      let response = await request(server).post("/api/restaurants/").set('Authorization', data.token).send({
        "restaurantName": "Chili's",
        "streetAddress": "3917 S Gilbert Rd",
        "city": "Gilbert",
        "zipcode": "85296",
        "phoneNumber": "911",
        "websiteURL": "www.chilis.com"
      })

      expect(response.status).toBe(200)
    })

    beforeEach(async () => {
      await db("users").truncate()
      await db("restaurants").truncate()
    })
  })

  describe("get restaurants", () => {
    it("should return restuarant info", async () => {
      await Restaurant.add({
        "restaurantName": "Chili's",
        "streetAddress": "3917 S Gilbert Rd",
        "city": "Gilbert",
        "zipcode": "85296",
        "phoneNumber": "911",
        "websiteURL": "www.chilis.com"
      })

      let response = await request(server).get("/api/restaurants")
      let parsedResponse = await JSON.parse(response.text)
      expect(parsedResponse[0].restaurantName).toBe("Chili's")
    })

    beforeEach(async () => {
      await db("restaurants").truncate()
    })
  })
})
