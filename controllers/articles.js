const db = require('../utils/db');

const getAllArticles = (req, res) => {
    let sql = "select * from article";

    db.query(sql, (error, result) => {
        if (error) throw error;
        res.render('index', {
            articles: result
        });
    });
}

const getArticleBySlug = (req, res) => {
    let sql = `select * from article where slug = '${req.params.slug}'`;

    db.query(sql, (error, result) => {
        if (error) throw error;

        res.render('article', {
            article: result
        });
    });
}

module.exports = {
    getAllArticles,
    getArticleBySlug
}