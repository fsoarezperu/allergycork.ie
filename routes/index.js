const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
res.render('index');
});


router.get('/news', async (req, res) => {
res.render('news');
});


router.get('/contact', async (req, res) => {
res.render('contact');
});


router.get('/about', async (req, res) => {
res.render('about');
});

router.get('/search', async (req, res) => {
res.render('search');
});

router.get('/login', async (req, res) => {
res.render('login');
});

module.exports = router;
