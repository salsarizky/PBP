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