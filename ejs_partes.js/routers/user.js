const { Router } = require("express");

const router = Router();

router.get("/Users", (req, res) => {
    res.render('users')
});


module.exports = router;