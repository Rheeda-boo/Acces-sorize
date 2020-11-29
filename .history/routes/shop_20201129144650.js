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

router.get("/categories", (req, res) => {
    res.render("shop/categories")
});

module.exports = router;