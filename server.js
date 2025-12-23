const express = require("express");
const { body, validationResult } = require("express-validator");
const Joi = require("joi");

const app = express();
const port = 3000;

app.use(express.json());

const validateinput = [
  body("username")
    .isLength({ min: 5 })
    .withMessage("panjang username minimal 5 karakter"),
  body("email")
    .isEmail()
    .withMessage("format email tidak valid"),
];

app.post("/user", validateinput, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.json({ message: "Data user valid" });
});

app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
});
