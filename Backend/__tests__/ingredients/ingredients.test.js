const { expect } = require("chai");
const request = require("supertest");
const { Ingredients } = require("../../src/models");
const app = require("../../src/app");
const {
  Sequelize,
  ValidationErrorItem,
  ValidationError,
} = require("sequelize");

describe("/ingredients", () => {
  before(async () => {
    await Ingredients.sequelize.sync({ force: true });
  });

  beforeEach(async () => {
    await Ingredients.destroy({ where: {} });
  });

  describe("with no products in the database", () => {
    describe("POST /ingredients", () => {
      it("creates a new ingredient in the database", async () => {
        const response = await request(app).post("/ingredients").send({
          product_id: 1,
          quantity: "25ml",
        });

        console.log(response.body);
        expect(response.body.product_id).to.equal(1);
        expect(response.body.quantity).to.equal("25ml");
      });
    });
  });

  describe("with records in the database", () => {
    let ingredients;

    beforeEach(async () => {
      ingredients = await Promise.all([
        Ingredients.create({
          product_id: 1,
          quantity: "25ml",
        }),
        Ingredients.create({
          product_id: 2,
          quantity: "75ml",
        }),
        Ingredients.create({
          product_id: 5,
          quantity: "45ml",
        }),
      ]);
    });

    describe("GET /ingredients", () => {
      it("returns all ingredient records in the database", async () => {
        const response = await request(app).get("/ingredients");

        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(3);

        response.body.forEach((ingredient) => {
          const expected = ingredients.find((a) => a.id === ingredient.id);

          expect(ingredient.product_id).to.equal(expected.product_id);
          expect(ingredient.quantity).to.equal(expected.quantity);
        });
      });
    });
  });
});
