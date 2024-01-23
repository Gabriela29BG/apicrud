const { Router } = require("express");

const router = Router();

router.get("/UserName", (req, res) => {
    res.send("Usernema router");
});

router.get("/profile", (res, req) => {
    console.log(req.body);
    res.send("profile page")
})

module.exports = router;