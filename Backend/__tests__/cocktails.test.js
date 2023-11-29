const { expect } = require("chai");
const request = require("supertest");
const Cocktails = require("../src/models");
const app = require("../src/app");
const {
  Sequelize,
  ValidationErrorItem,
  ValidationError,
} = require("sequelize");

describe("/cocktails", () => {
  before(async () => await Cocktails.sequelize.sync({ force: true }));

  beforeEach(async () => {
    await Cocktails.destroy({ where: {} });
  });

  describe("with no records in the database", () => {
    describe("POST /cocktails", () => {
      it("creates a new cocktail in the database", async () => {
        const response = await request(app).post("/cocktails").send({
          cocktailName: "Sweet Success",
          method: "Shake and fine strain",
          garnish: "Rice paper",
          glass: "Coupette",
        });

        expect(response.body.cocktailName).to.equal("Sweet Success");
        expect(response.body.method).to.equal("Shake and fine strain");
        expect(response.body.garnish).to.equal("Rice paper");
        expect(response.body.glass).to.equal("Coupette");
      });
    });
  });

  describe("with records in the database", () => {
    let cocktails;

    beforeEach(async () => {
      cocktails = await Promise.all([
        Cocktails.create({
          cocktailName: "Sweet Success",
          method: "Shake and fine strain",
          garnish: "Rice paper",
          glass: "Coupette",
        }),
        Cocktails.create({
          cocktailName: "Lady Luck",
          method: "Shake, strain and top",
          garnish: "Dehydrated lemon",
          glass: "Sling",
        }),
        Cocktails.create({
          cocktailName: "Tankard Ten",
          method: "Shake, dirty dump, top",
          garnish: "Dehydrated apple and lemon, mint sprig",
          glass: "Tankard",
        }),
      ]);
    });

    describe("GET /cocktails", () => {
      it("gets all of the cocktail records", async () => {
        const response = await request(app).get("/cocktails");

        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(3);

        response.body.forEach((cocktail) => {
          const expected = cocktails.find((a) => a.id === cocktail.id);

          expect(cocktail.cocktailName).to.equal(expected.cocktailName);
          expect(cocktail.method).to.equal(expected.method);
          expect(cocktail.garnish).to.equal(expected.garnish);
          expect(cocktail.glass).to.equal(expected.glass);
        });
      });
    });

    describe("GET /cocktails/:id", () => {
      it("gets cocktail record by id", async () => {
        const cocktail = cocktails[0];
        const response = await request(app).get(`/cocktails/${cocktail.id}`);

        expect(response.status).to.equal(200);
        expect(response.body.cocktailName).to.equal(cocktail.cocktailName);
        expect(response.body.method).to.equal(cocktail.method);
        expect(response.body.garnish).to.equal(cocktail.garnish);
        expect(response.body.glass).to.equal(cocktail.glass);
      });
    });

    describe("PATCH /cocktails/:id", () => {
      it("updates cocktail record by id", async () => {
        const cocktail = cocktails[0];
        const response = await request(app)
          .patch(`/cocktails/${cocktail.id}`)
          .send({ garnish: "Dehydrated pineapple" });

        expect(response.status).to.equal(200);
        expect(response.body.garnish).to.equal("Dehydrated pineapple");
      });
    });

    describe("DELETE /cocktails/:id", () => {
      it("deletes cocktail record by id", async () => {
        const cocktail = cocktails[0];
        const response = await request(app).delete(`/cocktails/${cocktail.id}`);
        const deletedCocktail = await Cocktails.findByPk(cocktail.id, {
          raw: true,
        });

        expect(response.status).to.equal(204);
        expect(deletedCocktail).to.equal(null);
      });
    });
  });
});
