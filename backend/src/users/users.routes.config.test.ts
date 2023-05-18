import express from "express";
import request from "supertest";
import {UsersRoutes} from "./users.routes.config";

describe("UsersRoutes", () => {
  let app: express.Application;
  let usersRoutes: UsersRoutes;

  beforeEach(() => {
    app = express();
    usersRoutes = new UsersRoutes(app);
    usersRoutes.configureRoutes();
  });

  describe("GET /users", () => {
    it("should return a list of users", async () => {
      const response = await request(app).get("/users");
      expect(response.status).toBe(200);
      expect(response.text).toBe("List of users");
    });
  });

  describe("POST /users", () => {
    it("should respond with a success message", async () => {
      const response = await request(app).post("/users");
      expect(response.status).toBe(200);
      expect(response.text).toBe("Post to users");
    });
  });

  describe("GET /users/:userId", () => {
    it("should return the specified user ID", async () => {
      const userId = "123";
      const response = await request(app).get(`/users/${userId}`);
      expect(response.status).toBe(200);
      expect(response.text).toBe(`GET requested for id ${userId}`);
    });
  });

  describe("PUT /users/:userId", () => {
    it("should update the specified user ID", async () => {
      const userId = "123";
      const response = await request(app).put(`/users/${userId}`);
      expect(response.status).toBe(200);
      expect(response.text).toBe(`PUT requested for id ${userId}`);
    });
  });

  describe("PATCH /users/:userId", () => {
    it("should partially update the specified user ID", async () => {
      const userId = "123";
      const response = await request(app).patch(`/users/${userId}`);
      expect(response.status).toBe(200);
      expect(response.text).toBe(`PATCH requested for id ${userId}`);
    });
  });

  describe("DELETE /users/:userId", () => {
    it("should delete the specified user ID", async () => {
      const userId = "123";
      const response = await request(app).delete(`/users/${userId}`);
      expect(response.status).toBe(200);
      expect(response.text).toBe(`DELETE requested for id ${userId}`);
    });
  });
});
