import Express from "express";
const express = require("express");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (_req: Express.Request, res: Express.Response, _next: Express.NextFunction) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
