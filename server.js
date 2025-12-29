<<<<<<< HEAD
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'rahasia';

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Akses ditolak, token tidak.'});
    }

    
    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token tidak valid.' });
    }
};

app.get('/secure-endpoint', verifyToken, (req, res) => {
    const { username } = req.user;
    res.json({ message: `Akses diberikan. Selamat datang ${username}!` });
});

app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
});
=======
<<<<<<< HEAD
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
=======
const express = require('express');
const app = express();
const port = 5000;

// Agar express bisa membaca JSON dari body request
app.use(express.json());

// Data awal mahasiswa
let mahasiswa = [
  { nim: '123', nama: 'Alice' },
  { nim: '456', nama: 'Bob' }
];

// 1. GET /mahasiswa  → Menampilkan semua mahasiswa
app.get('/mahasiswa', (req, res) => {
  res.json(mahasiswa);
});

// 2. POST /mahasiswa → Menambahkan mahasiswa baru
app.post('/mahasiswa', (req, res) => {
  const { nim, nama } = req.body;

  // Validasi sederhana
  if (!nim || !nama) {
    return res.status(400).json({ message: "NIM dan nama wajib diisi" });
  }

  // Cek duplikasi NIM
  const exists = mahasiswa.find((m) => m.nim === nim);
  if (exists) {
    return res.status(400).json({ message: "NIM sudah terdaftar" });
  }

  mahasiswa.push({ nim, nama });

  res.status(201).json({
    message: 'Mahasiswa berhasil ditambahkan',
    data: { nim, nama }
  });
});

// 3. DELETE /mahasiswa/:nim → Menghapus mahasiswa berdasarkan NIM
app.delete('/mahasiswa/:nim', (req, res) => {
  const { nim } = req.params;

  const index = mahasiswa.findIndex((m) => m.nim === nim);

  if (index === -1) {
    return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
  }

  const removed = mahasiswa.splice(index, 1);

  res.json({
    message: "Mahasiswa berhasil dihapus",
    data: removed[0]
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
>>>>>>> 1877549d62e3c4ae933f7ff15a5cec7d2c2e9cb3
>>>>>>> 8685c510e6fb66d3bc10bcb021b453e21029d085
