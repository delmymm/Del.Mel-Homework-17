const router = require("express").Router();
const api = require("./api/api");
const home = require("./home");

router.use("/api", api);
router.use("/", home);

router.use((req, res) => {
    res.send("<h1>Wrong Route</h1>")
})

module.exports = router;