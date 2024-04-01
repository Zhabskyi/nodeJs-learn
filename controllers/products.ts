import Express from "express";

interface Product {
  title: string;
}

const products: Product[] = [];

exports.getAddProduct = (
  _req: Express.Request,
  res: Express.Response,
  _next: Express.NextFunction,
) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (
  req: Express.Request,
  res: Express.Response,
  _next: Express.NextFunction,
) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (
  _req: Express.Request,
  res: Express.Response,
  _next: Express.NextFunction,
) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
