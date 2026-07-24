const { analyzeWebsite } = require("../services/auditService");

const auditWebsite = async (req, res) => {

    try {

        const { url } = req.body;

        const result = await analyzeWebsite(url);

        res.status(200).json(result);

    }

    catch (error) {

        res.status(400).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {
    auditWebsite
};