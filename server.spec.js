const request = require("supertest")
const server = require("./server.js")

describe("server", () => {
  describe("index", () => {
    it("should return 200", async () => {
      const response = await request(server).get("/");

      expect(response.status).toEqual(200);
    });

    it("should return welcome message", async () => {
      const expectedBody = { message: "welcome" };

      const response = await request(server).get("/");

      expect(response.body).toEqual(expectedBody);
    });

    it("should return a JSON object fron the index route", async () => {
      const response = await request(server).get("/");

      expect(response.type).toEqual("application/json");
    });
  });
});