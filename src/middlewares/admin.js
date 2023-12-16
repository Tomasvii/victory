const config = require("dotenv");
config.config();

const authenticateAdmin = (req, res, next) => {
    const userPassword = req.body.password;
    const userPassword2 = req.body.password2;
    const correctPassword = process.env.ADMIN_PASSWORD;

    if (userPassword === correctPassword || userPassword2 === correctPassword) {
        next();
    } else {
        res.render("home");
    }
};

module.exports.authenticateAdmin = authenticateAdmin;
