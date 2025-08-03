const { body } = require("express-validator");

const registervalidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Email is invalid"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  body("role")
    .isIn(["ADMIN", "VOLUNTEERS", "INTERNS"])
    .withMessage("Role must be ADMIN, VOLUNTEERS, or INTERNS"),
];
const loginvalidation = [
    body("email")
        .isEmail()
        .withMessage("Email is invalid"),
    body("password")
        
]
module.exports = { 
    registervalidation ,
    loginvalidation
};
