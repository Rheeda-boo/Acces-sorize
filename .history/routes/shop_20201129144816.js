const express = require("express");
const router = express.Router();


router.get("/prductlisting", (req, res) => {
    res.render("shop/index")
});

router.get("/checkout", (req, res) => {
    res.render("shop/checkout")
});

router.get("/cart", (req, res) => {
    res.render("shop/cart")
});

router.get("/categories", (req, res) => {
    res.render("shop/categories")
});

router.get("/categories/shoes", (req, res) => {
    res.render("shop/shoes")
});

router.get("/categories/hair", (req, res) => {
    res.render("shop/hair")
});

router.get("/categories/bags", (req, res) => {
    res.render("shop/bags")
});

router.get("/categories/shoes", (req, res) => {
    res.render("shop/jewulry")
});
module.exports = router;