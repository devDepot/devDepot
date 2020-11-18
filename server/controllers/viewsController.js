const db = require("../models/DbModel");

const viewsController = {};

// sending all engineers
viewsController.getDevelopers = async (req, res, next) => {
    try {
        const developers = await db.query('SELECT * FROM developers');
        console.log("developers:::", developers.rows)
        res.locals.developers = developers.rows;
        return next();
    } catch (err) {
        return next(err);
    }
}

// sending engineers based on stack
viewsController.getDeveloperStack = async (req,res,next) => {
    try {
        const { stack } = req.params;
        const devStack = await db.query('SELECT * FROM developers WHERE stack = $1', [stack]);
        res.locals.stack = devStack;
        return next();
    } catch (err) {
        return next(err);
    }
}

module.exports = viewsController;
