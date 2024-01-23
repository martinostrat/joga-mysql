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

module.exports = {
    getAllArticles
}