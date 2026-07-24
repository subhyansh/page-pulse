const { analyzeWebsite } = require("../services/auditService");

const auditWebsite = async (req, res) => {

    try {

        const { url } = req.body;

        const result = await analyzeWebsite(url);

        res.json(result);

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    auditWebsite
};