import Express from "express";
const express = require("express");

interface Product {
  title: string;
}

const router = express.Router();

const products: Product[] = [];

router.get(
  "/add-product",
  (_req: Express.Request, res: Express.Response, _next: Express.NextFunction) => {
    res.render("add-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  },
);

router.post(
  "/add-product",
  (req: Express.Request, res: Express.Response, _next: Express.NextFunction) => {
    products.push({ title: req.body.title });
    res.redirect("/");
  },
);

exports.routes = router;
exports.products = products;
