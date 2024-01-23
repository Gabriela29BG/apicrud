function HomeRouters(app) {
    app.("/about", (req, res) => {
        res.send("about page");
    });
    
    app.("/dashboard", (req, res) => {
        req.sendFile("Dashboard page");
    });
}


module.exports = HomeRouters