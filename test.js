<<<<<<< HEAD
const jwt = require("jsonwebtoken");
const secretKey = "rahasia";

const user = {
  id: 1,
  username: "Salsa Rizky Sabillah",
};

const token = jwt.sign(user, secretKey, { expiresIn: "30s" });
console.log("Token:", token);
=======
const axios = require("axios");

const testExpressValidator = async () => {
  try {
    const response = await axios.post("http://localhost:3000/user", {
      username: "salsarizkys",
      email: "apaweahkumahaaku12.com",
    });
    console.log("Response from /user (express-validator):", response.data);
  } catch (error) {
    console.log("Error from /user (express-validator):", error.response.data);
  }
};

const testJoiValidator = async () => {
  try {
    const response = await axios.post("http://localhost:3000/user-joi", {
      username: "salsarizkys",
      email: "apaweahkumahaaku12.com",
    });
    console.log("Response from /user-joi (Joi):", response.data);
  } catch (error) {
    console.log("Error from /user-joi (Joi):", error.response.data);
  }
};

const runTests = async () => {
  console.log("Testing /user route with express-validator...");
  await testExpressValidator();

  console.log("\nTesting /user-joi route with Joi...");
  await testJoiValidator();
};

runTests();
>>>>>>> 8685c510e6fb66d3bc10bcb021b453e21029d085
