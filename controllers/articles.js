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

        let author_id = result[0].author_id;
        let article = result[0];

        let sql = `select * from author where id = ${author_id}`;

        db.query(sql, (error, result) => {
            if (error) throw error;

            let author = result[0];
            article['author_name'] = author.name;
            article['author_id'] = author.id;

            res.render('article', {
                article: article
            });
        })
    });
}

const getArticlesByAuthor = (req, res) => {
    let sql = `select article.name, author.name as author_name, slug, image from article left join author on article.author_id = author.id where author_id = ${req.params.id}`;

    db.query(sql, (error, result) => {
        if (error) throw error;

        let author = result[0].author_name;

        res.render('author', {
            articles: result,
            author: author
        })
    })
}

module.exports = {
    getAllArticles,
    getArticleBySlug,
    getArticlesByAuthor
}