const jwt = require("jsonwebtoken");
const secretKey = "rahasia";

const user = {
  id: 1,
  username: "Salsa Rizky Sabillah",
};

const token = jwt.sign(user, secretKey, { expiresIn: "30s" });
console.log("Token:", token);
