import express from "express";
import request from "supertest";
import { CommonRoutesConfig } from "./common.routes.config";

class TestRoutes extends CommonRoutesConfig {
  configureRoutes(): express.Application {
    // Implement the routes for testing
    this.app.get("/test", (req, res) => {
      res.send("Test route");
    });

    return this.app;
  }
}

describe("CommonRoutesConfig", () => {
  let app: express.Application;
  let testRoutes: TestRoutes;

  beforeEach(() => {
    app = express();
    testRoutes = new TestRoutes(app, "TestRoutes");
  });

  describe("getName", () => {
    it("should return the name provided in the constructor", () => {
      const name = testRoutes.getName();
      expect(name).toBe("TestRoutes");
    });
  });

  describe("configureRoutes", () => {
    it("should configure the routes and return an instance of express.Application", () => {
      const configuredApp = testRoutes.configureRoutes();
      expect(configuredApp).toBe(app);
    });

    it("should configure the '/test' route", () => {
      testRoutes.configureRoutes();
      return request(app)
        .get("/test")
        .expect(200)
        .expect("Test route");
    });
  });
});
